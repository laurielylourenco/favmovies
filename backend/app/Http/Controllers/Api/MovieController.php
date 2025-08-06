<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{


    public function index(Request $request)
    {
        $query = \App\Models\FavoriteMovie::query()->with('genres');

        if ($request->has('genre')) {
            $genreName = $request->input('genre');

            $query->whereHas('genres', function ($q) use ($genreName) {
                $q->where('name', $genreName);
            });
        }

        $favoriteMovies = $query->latest()->get();

        return response()->json($favoriteMovies);
    }


    public function search(Request $request)
    {

        $request->validate([
            'query' => 'required|string',
        ]);

        $query = $request->input('query');


        $apiKey = config('services.tmdb.api_key');

        if (!$apiKey) {
            return response()->json(['error' => 'TMDB API key não foi configurada!'], 500);
        }


        $resp = Http::withOptions(['verify' => false])
            ->get('https://api.themoviedb.org/3/search/movie', [
                'api_key' => $apiKey,
                'query' => $query,
                'language' => 'pt-BR',
            ]);


        return $resp->json();
    }


    public function discoverMovie(Request $request)
    {

        $apiKey = config('services.tmdb.api_key');

        if (!$apiKey) {
            return response()->json(['error' => 'TMDB API key não foi configurada!'], 500);
        }

        $resp = Http::withOptions(['verify' => false])
            ->get('https://api.themoviedb.org/3/discover/movie', [
                'api_key' => $apiKey,
                'language' => 'pt-BR',
                'include_adult' => false,
                'include_video' => false,
                'sort_by' => 'popularity.desc',
                'page' => 1
            ]);


        return $resp->json();
    }


    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'tmdb_id' => 'required|integer|unique:favorite_movies,tmdb_id',
            'title' => 'required|string',
            'poster_path' => 'nullable|string',
            'overview' => 'required|string',
            'release_date' => 'nullable|date',
            'genre_ids' => 'required|array',
        ]);

        $genreMap = $this->getGenreMap();

        $genresData = collect($validated['genre_ids'])->map(function ($id) use ($genreMap) {
            return [
                'tmdb_id' => $id,
                'name' => $genreMap[$id] ?? 'Desconhecido' 
            ];
        });

        $genreIdsInDb = $genresData->map(function ($genreData) {
            return \App\Models\Genre::firstOrCreate(
                ['tmdb_id' => $genreData['tmdb_id']],
                ['name' => $genreData['name']]
            )->id;
        });

        $favoriteMovie = \App\Models\FavoriteMovie::create($validated);

        // Anexar os gêneros ao filme 
        $favoriteMovie->genres()->sync($genreIdsInDb);

        return response()->json($favoriteMovie->load('genres'), 201);
    }

    private function getGenreMap(): array
    {
        $apiKey = config('services.tmdb.api_key');

        // Cache da lista de gêneros por 24 horas
        return \Illuminate\Support\Facades\Cache::remember('tmdb_genres', now()->addDay(), function () use ($apiKey) {
            $response = Http::get('https://api.themoviedb.org/3/genre/movie/list', [
                'api_key' => $apiKey,
                'language' => 'pt-BR',
            ]);

            return collect($response->json()['genres'])->pluck('name', 'id')->all();
        });
    }


    public function destroy($tmdb_id)
    {
        $movie = \App\Models\FavoriteMovie::where('tmdb_id', $tmdb_id)->firstOrFail();
        $movie->delete();
        return response()->json(null, 204); 
    }
}

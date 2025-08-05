<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{
    /**
     * Search for movies on The Movie Database (TMDB).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
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

   
}

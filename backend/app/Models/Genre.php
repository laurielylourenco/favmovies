<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = ['tmdb_id', 'name'];

    /**
     * Os filmes que pertencem ao gênero.
     */
    public function favoriteMovies()
    {
        return $this->belongsToMany(FavoriteMovie::class, 'favorite_movie_genre');
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteMovie extends Model
{
    use HasFactory;

    protected $table = 'favorite_movies';

    protected $fillable = [
        'tmdb_id',
        'title',
        'poster_path',
        'overview',
        'release_date',
    ];

    protected $casts = [
        'release_date' => 'date',
    ];

    /**
     * Os gêneros que pertencem ao filme.
     */
    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'favorite_movie_genre');
    }
}
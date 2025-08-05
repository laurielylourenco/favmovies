<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('favorite_movies', function (Blueprint $table) {
            
            $table->id(); 
            $table->unsignedBigInteger('tmdb_id')->unique(); 
            $table->string('title'); 
            $table->string('poster_path')->nullable(); 
            $table->text('overview'); 
            $table->date('release_date')->nullable(); 
            $table->json('genres'); 
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favorite_movies');
    }
};

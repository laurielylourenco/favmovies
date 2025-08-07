<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::table('favorite_movies', function (Blueprint $table) {
    
            $table->text('overview')->nullable()->change();
            $table->float('vote_average')->after('release_date')->default(0);
        });
    }

    

 
    public function down(): void
    {
        Schema::table('favorite_movies', function (Blueprint $table) {
            $table->text('overview')->nullable(false)->change();
            $table->dropColumn('vote_average');
        });
    }
};


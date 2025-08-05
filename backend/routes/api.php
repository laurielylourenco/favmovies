<?php

use App\Http\Controllers\Api\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//filmes na API do TMDB 
Route::get('/movies/search', [MovieController::class, 'search']);
//CRUD
Route::post('/favorites', [MovieController::class, 'store']); 
Route::get('/favorites', [MovieController::class, 'index']); 
Route::delete('/favorites/{tmdb_id}', [MovieController::class, 'destroy']);  

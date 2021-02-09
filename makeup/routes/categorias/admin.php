<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoriasController;


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('admin/articulos', [CategoriasController::class, 'index']);
    Route::get('admin/articulos/{articulo_id}/articulos', [CategoriasController::class,'getArticulos']);
});
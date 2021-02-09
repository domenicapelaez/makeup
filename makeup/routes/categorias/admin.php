<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\CategoriasController;


Route::group(['middleware' => 'auth:api'], function () {
    
});

Route::get('admin/categorias/{categoriaid}/articulos', [CategoriasController::class,'getArticulos']);
Route::get('admin/categorias', [CategoriasController::class, 'index']);
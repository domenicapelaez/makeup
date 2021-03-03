<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\CategoriasController;


Route::group(['middleware' => 'auth:api'], function () {
    
});

Route::get('admin/categorias', [CategoriasController::class, 'index']);
Route::get('admin/categorias/{categoriaid}/articulos', [CategoriasController::class,'getArticulos']);

//Route::get('admin/categorias/{categoriaid}/articulos/{articuloid}', [CategoriasController::class,'getVer']);
//Route::get('admin/categorias/articulos', [CategoriasController::class, 'index']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'rol.admin'], function () {
        Route::post('admin/categorias/agregarc', [ArticulosController::class, 'store']);
    }); 
 });
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\MarcasController;


Route::group(['middleware' => 'auth:api'], function () {
    
});

Route::get('admin/marcas', [MarcasController::class, 'index']);
Route::get('admin/marcas/{marcaid}/articulos', [MarcasController::class,'getArticulos']);

Route::get('admin/marcas/{marcaid}/articulos/{articulo_id}', [MarcasController::class,'getVer']);

Route::group(['middleware' => 'auth:api'], function () {
   Route::group(['middleware' => 'rol.admin'], function () {
       Route::post('admin/marcas/agregarm', [MarcasController::class, 'store']);
   }); 
});
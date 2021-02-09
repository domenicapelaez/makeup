<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\MarcasController;

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('admin/marcas', [MarcasController::class, 'index']);
    Route::get('admin/marcas/{articulo_id}/articulos', [MarcasController::class,'getArticulos']);
});
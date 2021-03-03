
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ArticulosController;

Route::get('admin/articulos/{articuloid}', [ArticulosController::class, 'show']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'rol.admin'], function () {
        Route::post('admin/articulos', [ArticulosControllerr::class,'store']);
        Route::put('admin/articulos/{articuloid}', [ArticulosController::class,'update']);
        Route::delete('admin/articulos/{articuloid}', [ArticulosController::class,'destroy']);
    });
});

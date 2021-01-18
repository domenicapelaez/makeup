<?php

use App\Http\Controllers\admin\CategoriasController;
use App\Http\Controllers\admin\MarcasController;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\UsuariosController;
use App\Http\COntrollers\admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('admin/categorias', CategoriasController::class);

Route::resource('admin/marcas', MarcasController::class);

Route::resource('admin/articulos', ArticulosController::class);

Route::resource('admin/usuarios', UsuariosController::class);

Route::post('login', [AuthController::class, 'login']);

Route::post('registro', [AuthController::class, 'registro']);

Route::post('logout', [AuthController::class, 'logout']);

Route::post('user', [AuthController::class, 'getUser']);

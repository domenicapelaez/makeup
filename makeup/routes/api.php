<?php

use App\Http\Controllers\admin\CategoriasController;
use App\Http\Controllers\admin\MarcasController;
use App\Http\Controllers\admin\ArticulosController;
use App\Http\Controllers\admin\UsuariosController;
use App\Http\Controllers\admin\CuentasController;
use App\Http\Controllers\admin\FavoritosController;
use App\Http\Controllers\admin\AuthController;
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

//Route::resource('admin/marcas1', MarcasController::class);

Route::resource('admin/articulos', ArticulosController::class);

Route::resource('admin/usuarios', UsuariosController::class);

Route::resource('admin/cuentas', CuentasController::class);

Route::post('login', [AuthController::class, 'login']);

Route::post('registro', [AuthController::class, 'registro']);

Route::post('agregarm', [MarcasController::class, 'agregarm']);

Route::post('agregarc', [CategoriasController::class, 'agregarc']);

Route::post('agregara', [ArticulosController::class, 'agregara']);

/*
Route::get('user', [AuthController::class, 'getUser'])
    ->middleware('auth:api');

Route::post('logout', [AuthController::class, 'logout'])
    ->middleware('auth:api');
*/


Route::post('marcas', [ArticulosController::class, 'marcas']);

Route::post('categorias', [ArticulosController::class, 'categorias']);

Route::get('admin/marcas/articulos', [ArticulosController::class, 'articulos']);

Route::get('admin/categorias/articulos', [ArticulosController::class, 'articulos']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('admin/usuarios', [UsuariosController::class, 'usuario']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'getUser']);
    
});

Route::post('admin/newfavoritos', [FavoritosController::class, 'newfavorito']);

Route::get('admin/favoritos', [FavoritosController::class, 'favoritos']);

Route::get('articulos/{articuloid}/remove',[ ArticulosController::class, 'destroy' ]);

Route::put('admin/{articuloid}/actualizar', [ArticulosController::class,'actualizar']);
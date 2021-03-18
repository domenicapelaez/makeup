<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\filters\ArticulosController;

Route::post('articulos/filters', [ArticulosController::class, 'filtros']);
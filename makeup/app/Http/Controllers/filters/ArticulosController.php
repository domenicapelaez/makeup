<?php

namespace App\Http\Controllers\filters;
use App\Models\Articulo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticulosController extends Controller
{
    public function filtros(Request $request) {
        // $marcas = json_decode($request->input('data));
        $data = json_decode($request->input('data'), true);
        $precios = $data['precios'];
        $marcas = $data['marcas'];
        $articulos = Articulo::select("*")
                                //->whereIn('Marca', $marcas)
                                ->where('precio', '>', $precios[0])
                                ->where('precio', '<', $precios[1])
                                ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Articulos filtrados',
            'data' => $articulos,
            'code' => 401,
        ]);
    }    
}

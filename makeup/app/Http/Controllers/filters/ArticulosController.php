<?php

namespace App\Http\Controllers\filters;
use App\Model\Articulo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticulosController extends Controller
{
    public function filtros(Request $request) {
        // $categorias = json_decode($request->input('data));
        $data = json_decode($request->input('data'), true);
        $precios = $data['precios'];
        $categorias = $data['marcas'];
        $articulos = Articulo::select("*")
                                ->whereIn('Marca', $marcas)
                                ->where('PrecioVenta', '>', $precio[0])
                                ->where('PrecioVenta', '<', $precios[1])
                                ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Articulos filtrados',
            'data' => $articulos,
            'code' => 401,
        ]);
    }    
}

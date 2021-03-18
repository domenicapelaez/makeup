<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;

class ArticulosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $articulos = Articulo::all();         
        return  response()->json([
            'status' => 'success',
            'message' => 'Listado de Articulos' ,
            'code' => 401,
            'data' => $articulos
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($articuloid)
    {
        $articulos = Articulo::with('marcas')
                                ->select('*')
                                ->where('articulo_id', '=', $articuloid)
                                ->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Articulo seleccionado' ,
            'data' => $articulos[0],
            'code' => 401,
        ]);

    }

    public function editara(Request $request)
    {
        $rules = [
            'nombre_articulo'        => 'required|integer'
        ];

        #Paso1-. Validación de los campos del usuario
        $input = $request->all();
        $validator = Validator::make($input, $rules);
//        dd($validator->errors());
        if ($validator->fails()){
            return response()->json([
                'status' => 'error',
                'message' => 'Error al rellenar los campos',
                'errors'=> $validator->errors()
            ], 200);
        }

        $articulo = Articulo::update(array(
            'nombre_articulo'        => $request->input('nombre_articulo')
        ));

        return response()->json([
            'status' => 'Correcto.',
            'message' => 'Articulo actualizado.'], 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($articuloid)
    {
        $data = Articulo::destroy('articulo_id', '=', $articuloid);
        return response()->json([
            'status' => 'success',
            'message' => 'Articulo borrado',
            'code' => 401,
            'data' => $data
        ]);
    }
}

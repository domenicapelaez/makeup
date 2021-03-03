<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getArticulos($categoriaid){

        $articulos = Categoria::with('articulos')->where('categoriaid', '=', $categoriaid)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Articulos de la Categoria '. $categoriaid ,
            'code' => 401,
            'data' => $articulos
        ]);
    }

    public function index()
    {
       /* $categorias = Categoria::all();         
        return  response()->json($categorias); */

        $categorias = Categoria::with('articulos')->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Categorias de la tienda',
            'code' => 401,
            'data' => $categorias
        ]);
    }

    public function agregarc(Request $request)
    {
        $rules = [
            'categoriaid'        => 'required|integer',
            'nombre_categoria'   => 'required',
            'logo'               => 'required'
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

        $categoria = Categoria::create(array(
            'categoriaid'        => $request->input('categoriaid'),
            'nombre_categoria'   => $request->input('nombre_categoria'),
            'logo'               => $request->input('logo')
        ));

        return response()->json([
            'status' => 'Correcto.',
            'message' => 'Categoria agregada.'], 201);
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
    public function store(storeCategoriaPost $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function destroy($id)
    {
        //
    }
}

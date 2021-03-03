<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Marca;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MarcasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getArticulos($marcaid){

        $articulos = Marca::with('articulos')->where('marcaid', '=', $marcaid)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Articulos de la Marca '. $marcaid ,
            'code' => 401,
            'data' => $articulos //array de UNA SOLA MARCA
        ]);
    }

    /*public function getVer($marcaid){
        
        $articulos = Marca::with('articulos')->where('marcaid', '=', $marcaid)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Detalles del Articulo'. $marcaid ,
            'code' => 401,
            'data' => $articulos //array de UN SOLO ARTICULO
        ]);*/

 public function index()
    {
       // $marcas = Marca::with('articulos')->get();
     $marcas = Marca::with('articulos')->get();
      //  $marcas = Marca::all();
        return  response()->json([
            'status' => 'success',
            'message' => 'Marcas de la tienda',
            'code' => 401,
            'data' => $marcas
        ]);
    }

    public function agregarm(Request $request)
    {
        $rules = [
            'marcaid'        => 'required|integer',
            'nombre_marca'   => 'required',
            'logo'           => 'required'
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

        $marca = Marca::create(array(
            'marcaid'            => $request->input('marcaid'),
            'nombre_marca'       => $request->input('nombre_marca'),
            'logo'               => $request->input('logo')
        ));

        return response()->json([
            'status' => 'Correcto.',
            'message' => 'Marca agregada.'], 201);
    }
    /* public function articulos($id){
        //    echo "-->". $id;
            $marcas = Marca::with('articulos')->get();
            return  response()->json($marcas);
    }

    public function index(Request $request)
    {
        //$marcas = Marca::all();    
        $marcas = Marca::with('articulos')->get();     
        return  response()->json($marcas);
    } */

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
    public function store(storeMarcaPost $request)
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

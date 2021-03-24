<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function agregara(Request $request)
    {
        $rules = [
            'articulo_id'        => 'required|integer',
            'nombre_articulo'    => 'required',
            'descripcion'        => 'required',
            'categoriaid   '     => 'required',
            'precio'             => 'required',
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

        $articulo = Articulo::create(array(
            'articulo_id'        => $request->input('articulo_id'),
            'nombre_articulo'    => $request->input('nombre_articulo'),
            'descripcion'        => $request->input('descripcion'),
            'categoriaid'        => $request->input('categoriaid'),
            'marcaid'            => $request->input('marcaid'),
            'precio '            => $request->input('precio'),
            'logo'               => $request->input('logo')
        ));

        return response()->json([
            'status' => 'Correcto.',
            'message' => 'Articulo agregado.'], 201);
    }

    public function actualizar(Articulo $articulo, Request $request, $articuloid)
    {
        $articulo = Articulo::where('articulo_id', $articuloid)->update($request->only('articulo_id','nombre_articulo', 'descripcion'));
        
        
        if ($articulo === null) {
            return response()->json('Company Not found', 404);
        }
        
        return response()->json($articulo, 200);
        
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
        $result = Articulo::where('articulo_id', $articuloid)->delete();
        //$articulo = Articulo::find($articuloid);
    //    $result = $articulo[0]->delete();
        if ($result == 1){
            $mensaje = "Articulo ". $articuloid. " eliminado correctamente";
        }else{
            $mensaje = "Articulo ". $articuloid. " No eliminado";
        };

        return response()->json([
            'status' => 'success',
            'message' => $mensaje,
            'code' => 401,
        ]);
    }
}

<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\storeMarcaPost;
use App\Models\Marca;
use Illuminate\Http\Request;

class MarcasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getArticulos($marcaid){
        $articulos = Marca::with('articulos')->where('Marca', '=', $marcaid)->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Articulos de la Marca '. $marcaid ,
            'code' => 401,
            'data' => $articulos
        ]);
    }

 public function index()
    {
       // $marcas = Marca::with('articulos')->get();
        $marcas = Marca::with('articulos')->get();
        return  response()->json([
            'status' => 'success',
            'message' => 'Marcas de la tienda',
            'code' => 401,
            'data' => $marcas
        ]);
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
        $marcas = $request->validated();
        if ($marcas){
            Marca::create($marcas);
        }
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

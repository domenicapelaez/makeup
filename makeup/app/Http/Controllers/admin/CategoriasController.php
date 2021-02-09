<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\storeCategoriaPost;
use App\Models\Categoria;
use Illuminate\Http\Request;

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
        $categorias = $request->validated();
        if ($categorias){
            Categoria::create($categorias);
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;
    protected $table = 'articulos';
    protected $primarykey = 'articulo_id';
    protected $fillable = ['articulo_id','nombre_articulo','descripcion','categoriaid',
    'marcaid','precio','imagen','created_at','updated_at'];
    public $timestamps = true;

    public function marcas(){
        return $this->belongsTo(Marca::class,'marcaid', 'marcaid');
    }
    public function categorias(){
        return $this->belongsTo(Categoria::class,'categoriaid', 'categoriaid');
    }
}

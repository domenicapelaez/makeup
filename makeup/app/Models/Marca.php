<?php

namespace App\Models;
//use App\Models\Articulo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;
    protected $table = 'marcas';
    protected $primarykey = 'marcaid';
    protected $fillable = ['marcaid','nombre_marca','logo','created_at','updated_at'];
    public $timestamps = true;

    public function articulos() {
        return $this->hasMany(Articulo::class,'marcaid', 'marcaid');
    }
}

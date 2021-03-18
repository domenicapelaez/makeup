<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Articulo;
use App\Models\Cuenta;
use Illuminate\Database\Eloquent\Model;

class Favorito extends Model
{
    use HasFactory;
    protected $table = 'favoritos';
    protected $primarykey = 'id';
    protected $fillable = ['id','cuentaid','articuloid'];

    public $timestamps = false;

    public function articulos() {
        return $this->belongsTo(Articulo::class,'articuloid','articulo_id');
    }

    public function cuentas() {
        return $this->belongsTo(Cuenta::class,'cuentaid','id');
    }
}

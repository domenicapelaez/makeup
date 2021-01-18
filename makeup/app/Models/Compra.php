<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{
    use HasFactory;
    protected $table = 'compras';
    protected $primarykey = 'compraid';
    protected $fillable = ['compraid',,'articuloid','cantidad','fecha','descuento','importe','estado','created_at','updated_at'];
    public $timestamps = true;
}

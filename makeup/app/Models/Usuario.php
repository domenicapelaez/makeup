<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable {

    use HasFactory;
    use HasApiTokens;
    protected $table = 'usuarios';
    protected $primarykey = 'userid';
    protected $fillable = ['userid','nombre','apellidos','telefono','ciudad','codigopostal','id','compraid','created_at','updated_at'];
    public $timestamps = true;
    
}

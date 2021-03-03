<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Cuenta extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    protected $table = 'cuentas';
    protected $primarykey = 'id';
    protected $fillable = ['id','rol','nombre','apellidos','email','password','created_at','updated_at'];
    public $timestamps = true;

    public function usuario() {
        return $this->hasMany(Usuario::class,'userid');
    }
}

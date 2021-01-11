<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuarios';
    protected $primarykey = 'userid';
    protected $fillable = ['userid','nombre','apellidos','email','pass','perfil', 'created_at', 'updated_at'];
    public $timestamps = true;
}

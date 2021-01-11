<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->smallInteger('userid')->primary();
            $table->string('nombre',40);
            $table->string('apellidos',40);
            $table->string('telefono',10);
            $table->string('ciudad',40);
            $table->string('codigopostal',5);
            $table->smallInteger('cuentaid');
            $table->smallInteger('compraid');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}

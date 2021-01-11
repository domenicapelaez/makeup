<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articulos', function (Blueprint $table) {
            $table->integer('articulo_id')->primary()->unique();
            $table->string('nombre_articulo', 100);
            $table->longText('descripcion')->nullable();
            $table->integer('categoriaid')->index();
            // $table->foreign('categoriaid')->references('categoriaid')->on('categorias');
            $table->integer('marcaid')->index();
            // $table->foreign('marcaid')->references('marcaid')->on('marcas');
            $table->double('precio', 5, 2);
            $table->string('imagen', 100)->nullable();
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
        Schema::dropIfExists('articulos');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkCuentaFkArticuloToFavoritos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('favoritos', function (Blueprint $table) {
        $table->foreign('cuentaid')
            ->references('id')->on('cuentas')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            
        $table->foreign('articuloid')
            ->references('articulo_id')->on('articulos')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('favoritos', function (Blueprint $table) {
            $table->dropForeign('favoritos_cuentaid_foreign');
            $table->dropForeign('favoritos_articuloid_foreign');
        });
    }
}

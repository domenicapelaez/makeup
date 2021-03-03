<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkCuentaFkCompraToUsuarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->foreign('cuentaid')
            ->references('id')->on('cuentas')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('compraid')
            ->references('compraid')->on('compras')
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
        Schema::table('usuarios', function (Blueprint $table) {
            $table->dropForeign('usuarios_cuentaid_foreign');
            $table->dropForeign('usuarios_compraid_foreign');
        });
    }
}

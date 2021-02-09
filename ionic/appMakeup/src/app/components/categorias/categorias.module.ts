import { NgModule } from '@angular/core';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [CategoriasComponent, ArticulosComponent],
  exports: [CategoriasComponent, ArticulosComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from '../articulos/articulos.component';
import { ComunesModule } from '../comunes/comunes.module';
import { ArticuloComponent } from './articulo/articulo.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ArticulosComponent,ArticuloComponent],
  imports: [
    CommonModule,
    ComunesModule,
    IonicModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from '../articulos/articulos.component';
import { ComunesModule } from '../comunes/comunes.module';
import { ArticuloComponent } from './articulo/articulo.component';
import { IonicModule } from '@ionic/angular';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ArticulosComponent,ArticuloComponent,EditComponent],
  imports: [
    CommonModule,
    ComunesModule,
    IonicModule,
    FormsModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }

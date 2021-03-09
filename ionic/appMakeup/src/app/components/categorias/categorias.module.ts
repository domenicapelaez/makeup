import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { VerComponent } from './articulos/ver/ver.component';

@NgModule({
  declarations: [CategoriasComponent, 
                ArticulosComponent,
                VerComponent],
  exports: [CategoriasComponent, 
            ArticulosComponent,
            VerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    CategoriasRoutingModule,
    FormsModule
  ]
})
export class CategoriasModule { }

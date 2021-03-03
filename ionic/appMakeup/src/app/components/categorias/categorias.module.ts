import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AgregarcComponent } from './agregarc/agregarc.component';
import { VerComponent } from './articulos/ver/ver.component';

@NgModule({
  declarations: [CategoriasComponent, 
                ArticulosComponent,
                AgregarcComponent,
                VerComponent],
  exports: [CategoriasComponent, 
            ArticulosComponent,
            AgregarcComponent,
            VerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    FormsModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }

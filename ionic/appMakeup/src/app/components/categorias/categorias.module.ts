import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { IonicModule } from '@ionic/angular';
import { ComunesModule } from '../comunes/comunes.module';

@NgModule({
  declarations: [CategoriasComponent],
  exports: [CategoriasComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }

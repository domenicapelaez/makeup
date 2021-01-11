import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ComunesModule } from '../comunes/comunes.module';


@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticulosbComponent } from './articulosb/articulosb.component';
import { BusquedaComponent } from './busqueda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';


@NgModule({
  declarations: [BusquedaComponent,ArticulosbComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BusquedaRoutingModule
  ]
})
export class BusquedaModule { }

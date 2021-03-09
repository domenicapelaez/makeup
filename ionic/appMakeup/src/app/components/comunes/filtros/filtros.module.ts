import { MarcasComponent } from './../filtros/marcas/marcas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FiltrosComponent } from './filtros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';


@NgModule({
  declarations: [FiltrosComponent, MarcasComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FiltrosRoutingModule
  ]
})
export class FiltrosModule { }

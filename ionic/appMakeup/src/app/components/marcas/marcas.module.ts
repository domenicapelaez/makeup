import { NgModule } from '@angular/core';
import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [MarcasComponent, ArticulosComponent],
  exports: [MarcasComponent, ArticulosComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }

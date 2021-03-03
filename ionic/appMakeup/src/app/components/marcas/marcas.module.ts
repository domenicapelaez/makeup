import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComunesModule } from '../comunes/comunes.module';
import { IonicModule } from '@ionic/angular';
import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AgregarmComponent } from './agregarm/agregarm.component';
import { VerComponent } from './articulos/ver/ver.component';

@NgModule({
  declarations: [MarcasComponent, 
                ArticulosComponent,
                AgregarmComponent,
                VerComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    FormsModule,
    MarcasRoutingModule,
  ]
})
export class MarcasModule { }

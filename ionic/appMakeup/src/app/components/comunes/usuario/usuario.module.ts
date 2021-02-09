import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { IonicModule } from '@ionic/angular';
import { UsuarioComponent } from './usuario.component';
import { ComunesModule } from '../comunes.module';


@NgModule({
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent],
  imports: [
    CommonModule,
    IonicModule,
    UsuarioRoutingModule,
    ComunesModule,
    UsuarioComponent
  ]
})
export class UsuarioModule { }

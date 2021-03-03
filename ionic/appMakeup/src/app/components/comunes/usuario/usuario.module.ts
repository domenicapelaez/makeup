import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { UsuarioComponent } from './usuario.component';
import { ComunesModule } from '../comunes.module';


@NgModule({
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesModule,
    UsuarioComponent
  ]
})
export class UsuarioModule { }

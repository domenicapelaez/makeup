import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesRoutingModule } from './comunes-routing.module';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { NewComponent } from './new/new.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LikeComponent } from './like/like.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InfoComponent } from './info/info.component';
import { CompraComponent } from './compra/compra.component';


@NgModule({
  declarations: [HeaderComponent,
    HomeComponent,
    LoginComponent,
    NewComponent,
    ContactoComponent,
    LikeComponent,
    MenuComponent,
    UsuarioComponent,
    CompraComponent,
    InfoComponent],

  exports: [HeaderComponent,
    HomeComponent,
    LoginComponent,
    NewComponent,
    ContactoComponent,
    LikeComponent,
    MenuComponent,
    UsuarioComponent,
    CompraComponent,
    InfoComponent,
    PipesModule],

  imports: [
    CommonModule,
    IonicModule,
    ComunesRoutingModule,
    FormsModule,
  ]
})
export class ComunesModule { }

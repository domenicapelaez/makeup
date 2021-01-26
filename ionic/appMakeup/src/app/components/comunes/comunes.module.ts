import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunesRoutingModule } from './comunes-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { IonicModule } from '@ionic/angular';
import { NewComponent } from './new/new.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LikeComponent } from './like/like.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent,
    HomeComponent,
    LoginComponent,
    CuentaComponent,
    NewComponent,
    ContactoComponent,
    LikeComponent,
    MenuComponent],
  exports: [HeaderComponent,
    HomeComponent,
    LoginComponent,
    CuentaComponent,
    NewComponent,ContactoComponent,
    LikeComponent,
    MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    ComunesRoutingModule,
    FormsModule,
  ]
})
export class ComunesModule { }

import { NavController } from '@ionic/angular';
import { CuentaService } from './../../../services/cuentas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getMaxListeners } from 'process';
NgForm

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUser = {
    email: 'adela@gmail.com',
    password: 'hola'
  };

  constructor(private cService: CuentaService,
              private navCtrl: NavController) { }

  async login(fLogin: NgForm){
    console.log(this.loginUser);
    if (fLogin.invalid) { return; }
    // recordemos que 'peticion' es una PROMESA 
    const peticion = await this.cService.login(this.loginUser.email, this.loginUser.password);
    if ( peticion.status == 'success' ){
      // navegar al home
      this.navCtrl.navigateRoot('home', { animated: true } );
    }else {
      //this.uiService.alertaInformativa('Usuario/Password no son válidos');
    }
  }


  ngOnInit() {}

}

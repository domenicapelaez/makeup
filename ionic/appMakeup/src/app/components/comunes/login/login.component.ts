import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CuentasService } from './../../../services/cuentas.service';
import { NavController } from '@ionic/angular';
import { MensajesService } from './../../../services/mensajes.service';
import { ILogin } from './../../../interfaces/CuentaInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginUser: ILogin = {
    email: 'luna@gmail.com',
    password: 'usuario'
  };

  constructor(private cService: CuentasService,
              private navCtrl: NavController,
              private mService: MensajesService) { }

  async login(fLogin: NgForm){
    console.log(this.loginUser);
    if (fLogin.invalid) { return; }
    // recordemos que 'peticion' es una PROMESA 
    const peticion = await this.cService.login(this.loginUser);
    
    /*if ( peticion.status == 'success' ){
      // navegar al home
      this.navCtrl.navigateRoot('usuario', { animated: true } );
    }else {
      this.mService.alertaInformativa('Usuario/Password incorrectos');
    } */
  }

  ngOnInit() {}

}

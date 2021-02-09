import { CuentasService } from './../../../services/cuentas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MensajesService } from './../../../services/mensajes.service';
import { ICuenta } from './../../../interfaces/CuentaInterface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  newuser: ICuenta = {
    id: 1,
    rol: 'usuario',
    nombre: 'alicia',
    apellidos: 'fontalva',
    email: 'alicia@gmail.com',
    password: 'hola'
  }

  constructor(private cService: CuentasService,
              private NavController: NavController,
              private mService: MensajesService) { }

  ngOnInit() { }

   async registro(fRegistro) {

    if (fRegistro.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.cService.registro( this.newuser);
    
    if ( peticion.status == 'success' ){
     this.mService.alertaInformativa( peticion.message );
     this.NavController.navigateRoot('login', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICuenta } from './../../../interfaces/CuentaInterface';
import { CuentaService } from './../../../services/cuentas.service';

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

  constructor(private uService: CuentaService,
              private NavController: NavController) { }

  ngOnInit() { }

   async registro(fRegistro) {

    if (fRegistro.invalid) { return; }
    
    const peticion = await this.uService.registro( this.newuser);
    
    if ( peticion.status == 'success' ){
     //this.uiService.alertaInformativa( peticion.message );
     this.NavController.navigateRoot('login', { animated: true });
      } 
    
    else {
    console.log(peticion);
    //this.uiService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

}

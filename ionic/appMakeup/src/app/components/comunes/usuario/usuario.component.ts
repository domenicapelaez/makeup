import { ICuenta } from './../../../interfaces/CuentaInterface';
import { Component, OnInit } from '@angular/core';
import { CuentasService } from './../../../services/cuentas.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  cuentas: ICuenta;

  constructor(private cService: CuentasService) { }

  async ngOnInit() {
    //this.cuentas = await this.cService.getCuentaStorage();
   // console.log (this.cuentas);

   this.cService.userStorageObservable
      .subscribe ( data => {
        this.cuentas = data;
        console.log (this.cuentas );
      })
  }

  async ionViewWillEnter (){
    console.log('entrar');
    /*
    this.cService.userStorageObservable
      .subscribe ( data => {
        this.cuentas = data;
        console.log (this.cuentas );
      })
      */

    this.cuentas = await this.cService.getCuentaStorage();
    console.log(this.cuentas)  
  }
}
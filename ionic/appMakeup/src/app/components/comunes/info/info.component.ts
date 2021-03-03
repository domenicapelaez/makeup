import { Component, OnInit } from '@angular/core';
import { CuentasService } from './../../../services/cuentas.service';
import { IUsuario } from './../../../interfaces/CuentaInterface';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  usuario: IUsuario;

  constructor(private cService: CuentasService) { }

  async ngOnInit() {
    //this.cuentas = await this.cService.getCuentaStorage();
   // console.log (this.cuentas);

   this.cService.userStorageObservable
      .subscribe ( data => {
        this.usuario = data;
        console.log (this.usuario );
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
  this.usuario = await this.cService.getCuentaStorage();
    console.log(this.usuario);
  }

}

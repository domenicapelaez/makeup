import { ActivatedRoute } from '@angular/router';
import { CuentasService } from './../../../services/cuentas.service';
import { ICuenta } from './../../../interfaces/CuentaInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.scss'],
})
export class ConfComponent implements OnInit {

  cuentas: ICuenta;
  rol: string;
  
  constructor(private cService: CuentasService,
              private route: ActivatedRoute) { }

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

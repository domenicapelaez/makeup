import { Component, OnInit } from '@angular/core';
import { CuentasService } from './../../../services/cuentas.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  cuentas: any;

  constructor(private cService: CuentasService) { }

  ngOnInit() {
    this.cService.getCuentas()
    .subscribe(data => {
      this.cuentas = data,
      console.log(data);
    });
  }

  ionViewWillEnter (){
    this.cService.userStorageObservable
      .subscribe ( data => {
        this.cuentas = data;
        console.log (this.cuentas );
      })
  }

  async getUser() {
    this.cuentas = await this.cService.getCuentaStorage();
    console.log (this.cuentas);
}

}

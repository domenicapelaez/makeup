import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from 'src/app/services/marcas.service';
import { CuentasService } from './../../../services/cuentas.service';
import { IArticulo, IMarca, MsnApiMarcas } from './../../../interfaces/ArticulosInterface';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  public marcaid: string;
  public marcas: IMarca[];
  public articulos: IArticulo[];
  public respuesta: MsnApiMarcas;
  cuenta: any;

  constructor(private route: ActivatedRoute,
              private mService: MarcasService,
              private cService: CuentasService) { 
  
  this.marcaid = this.route.snapshot.paramMap.get('marcaid');
}

  async ngOnInit() {
    let respuesta = await this.mService.getArticulos(this.marcaid); 
    this.marcas = respuesta.data;
    console.log(this.marcas);
    this.cService.userStorageObservable
    .subscribe ( data => {
      this.cuenta = data;
    })
}
  ionViewWillEnter (){
  this.cService.userStorageObservable
    .subscribe ( data => {
      this.cuenta = data;
    })
}

async getCuenta() {
    this.cuenta = await this.cService.getCuentaStorage();
}
}

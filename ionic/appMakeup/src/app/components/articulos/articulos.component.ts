import { ActivatedRoute } from '@angular/router';
import { CuentasService } from './../../services/cuentas.service';
import { ArticulosService } from './../../services/articulos.service';
import { MsnApiArticulos, IArticulo } from './../../interfaces/ArticulosInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  public articulos: any;
  cuenta: any;

  constructor(private aService: ArticulosService,
              private cService: CuentasService,
              private route: ActivatedRoute) { 
  this.articulos = this.route.snapshot.paramMap.get('articulo_id');
  }

  async ngOnInit() {
    let respuesta = await this.aService.getArticulos();
    this.articulos = respuesta.data;
    console.log(respuesta.data);
      this.cService.userStorageObservable
    .subscribe ( data => {
      this.cuenta = data;
    });
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

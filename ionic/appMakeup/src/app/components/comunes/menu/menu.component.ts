import { MsnApiArticulos, IArticulo, IMarca } from './../../../interfaces/ArticulosInterface';
import { IFiltrosArticulos } from './../../../interfaces/FiltrosInterfaces';
import { MarcasService } from './../../../services/marcas.service';
import { Platform } from '@ionic/angular';
import { CuentasService } from './../../../services/cuentas.service';
import { ArticulosService } from './../../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  public texto='';
  articulos: any;
  cuenta: any;
  
  public marca: IMarca[];
  public items: string[] = [];
  public precio = 50;
  public rangeVal: string;
  public IFiltros: IFiltrosArticulos = {
    precios: [],
    marcas: [],
  };

  @Input('seccion') seccion: string;

  constructor(public platform: Platform,
              private mService: MarcasService,
              private filterAService: ArticulosService,
              private cService: CuentasService,
              private articulosService: ArticulosService,
              private route: ActivatedRoute) {

this.articulos = this.route.snapshot.paramMap.get('articulo_id');
}

  async ngOnInit() {
    let respuesta = await this.articulosService.getArticulos();
    this.articulos = respuesta.data;
    console.log(respuesta);
    this.cService.userStorageObservable
    .subscribe ( data => {
    this.cuenta = data;
    })
  }
  buscar(event) {
    const busqueda = event.detail.value
    this.articulosService.buscarArticulos(busqueda).subscribe(data => {
      console.log(this.texto);
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
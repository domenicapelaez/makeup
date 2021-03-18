import { IFiltrosArticulos } from './../../interfaces/FiltrosInterfaces';
import { IMarca } from './../../interfaces/ArticulosInterface';
import { ArticulosfService } from './../../services/filters/articulosf.service';
import { MarcasService } from './../../services/marcas.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {

  public marcas: IMarca[];
  public items: string[] = [];
  public precio = 50;
  public rangeVal: string;
  public IFiltros: IFiltrosArticulos = {
   // precio: { min: 0, max: 0 },
    precios: [],
    marcas: []
  };

  constructor(public platform: Platform,
              private marcasService: MarcasService,
              private filterAService: ArticulosfService) { 
   this.platform.ready().then( () => {
      this.rangeVal = "50";
    });
  }

  async ionViewWillEnter(){
    let respuesta = await this.marcasService.getMarcas();
    this.marcas = respuesta.data;
    console.log (respuesta);
  }
  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
   // console.log(this.rangeVal);
   //this.IFiltros.precio.max = precio.detail.value.upper;
   //this.IFiltros.precio.min = precio.detail.value.lower;
   this.IFiltros.precios[0] = precio.detail.value.lower;
   this.IFiltros.precios[1] = precio.detail.value.upper;

  }
  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    this.marcas = respuesta.data;
    console.log (respuesta);
  }

  async selectmarca(marca, pos){
    console.log(marca, pos);
    //
    let i = this.items.indexOf(marca);
    if ( i == -1 ){
      this.items.push(marca);
    }else {
      this.items.splice( i, 1 );
    }
    console.log(this.items);
   // let respuesta = await this.marcasService.getArticulos(marca);
  }

  async aplicar(){
     this.IFiltros.marcas = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterAService.getFilter(this.IFiltros);
     //  console.log(respuesta);
       this.items = [];
  }
}

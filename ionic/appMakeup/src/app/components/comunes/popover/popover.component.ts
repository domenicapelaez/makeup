import { IMarca } from './../../../interfaces/ArticulosInterface';
import { IFiltrosArticulos } from './../../../interfaces/FiltrosInterfaces';
import { Platform } from '@ionic/angular';
import { ArticulosService } from './../../../services/filters/articulos.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

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
              private filterAService: ArticulosService) {
    this.platform.ready().then( () => {
      this.rangeVal = "50";
    });

  }

  changeRange(precio) {
    console.log(precio.detail.value.lower,':', precio.detail.value.upper);
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
   // let respuesta = await this.marcasService.getMarcas(marca);
  }

  async aplicar(){
     this.IFiltros.marcas = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterAService.getFilter(this.IFiltros);
     //  console.log(respuesta);
       this.items = [];
  }
}
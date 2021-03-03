import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuentasService } from '../../../services/cuentas.service';
import { MarcasService } from '../../../services/marcas.service';
import { IMarca, MsnApiArticulos, IArticulo } from '../../../interfaces/ArticulosInterface';
import { ArticulosService } from '../../../services/articulos.service';
import { Platform } from '@ionic/angular';
import { IFiltrosArticulos } from '../../../interfaces/FiltrosInterfaces';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  articulos: any;
  public texto='';
  cuenta: any;
  
  public marca: IMarca[];
  public items: string[] = [];
  public precio = 50;
  public rangeVal: string;
  public IFiltros: IFiltrosArticulos = {
    precios: [],
    marcas: [],
  };

  //@Input('seccion') seccion: string;

  constructor(public platform: Platform,
              private mService: MarcasService,
              private filterAService: ArticulosService,
              private cService: CuentasService,
              private articulosService: ArticulosService,
              private route: ActivatedRoute) {

  this.articulos = this.route.snapshot.paramMap.get('articulo_id');

   /* this.platform.ready().then( () => {
      this.rangeVal = "50";
    }); */
  }

  /* async ionViewWillEnter(){
   let respuesta = await this.marcasService.getMarcas();
   this.marca = respuesta.data;
   console.log (respuesta);
  }

  changeRange(precio) {
    console.log(precio.detail.value.lower, ':', precio.detail.value.upper);
    this.IFiltros.precios[0] = precio.detail.value.lower;
    this.IFiltros.precios[1] = precio.detail.value.upper;
  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    this.marca = respuesta.data;
    console.log (respuesta);
  }

  async selectmarca(marca, pos){
    console.log(marca, pos);

    let i = this.items.indexOf(marca);
    if ( i == 1){
      this.items.push(marca);
    }else {
      this.items.splice ( i,1 );
    }
    console.log(this.items);
    }

    async aplicar(){
      this.IFiltros.marcas = this.items;

      console.log (this.IFiltros);
      let respuesta = await this.filterAService.getFilter(this.IFiltros);
      this.items = [];
    } */
  
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



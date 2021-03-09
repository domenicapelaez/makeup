import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuentasService } from '../../../services/cuentas.service';
import { MarcasService } from '../../../services/marcas.service';
import { IMarca, MsnApiArticulos, IArticulo } from '../../../interfaces/ArticulosInterface';
import { ArticulosService } from '../../../services/articulos.service';
import { Platform, PopoverController } from '@ionic/angular';
import { IFiltrosArticulos } from '../../../interfaces/FiltrosInterfaces';
import { PopoverComponent } from './../popover/popover.component';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {

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
              private route: ActivatedRoute,
              public popoverController: PopoverController) {

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

    async presentPopover(ev: any){
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
  }



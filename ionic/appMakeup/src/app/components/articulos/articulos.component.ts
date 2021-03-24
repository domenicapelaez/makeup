import { NavController } from '@ionic/angular';
import { CategoriasService } from './../../services/categorias.service';
import { MensajesService } from './../../services/mensajes.service';
import { ArticulosfService } from './../../services/filters/articulosf.service';
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

  rol: string;
  usuario: string;
  tipo: string;
  isAdmin: boolean = false;

  constructor(private aService: ArticulosService,
              private cService: CuentasService,
              private route: ActivatedRoute,
              private filterAService: ArticulosfService,
              private mService: MensajesService,
              private catService: CategoriasService,
              private navController: NavController) { 
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
      });

      this.filterAService.articulosStorageObservable
      .subscribe (respuesta => {
        this.articulos = respuesta;
        console.log (this.articulos);
      });

      
  }
  
  async getCuenta() {
      this.cuenta = await this.cService.getCuentaStorage();
  }

  async eliminararticulo(articuloid){
    console.log(articuloid);
    let respuesta = await this.aService.borrar(articuloid);
    console.log(respuesta);
    if (respuesta.status=='success'){
      this.mService.alertaborrado(articuloid);
    }
  }

}

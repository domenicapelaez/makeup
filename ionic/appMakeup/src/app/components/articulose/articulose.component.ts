import { NavController } from '@ionic/angular';
import { CategoriasService } from './../../services/categorias.service';
import { MsnApiArticulos, IArticulo } from './../../interfaces/ArticulosInterface';
import { MensajesService } from './../../services/mensajes.service';
import { ArticulosfService } from './../../services/filters/articulosf.service';
import { ActivatedRoute } from '@angular/router';
import { CuentasService } from './../../services/cuentas.service';
import { ArticulosService } from './../../services/articulos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulose',
  templateUrl: './articulose.component.html',
  styleUrls: ['./articulose.component.scss'],
})
export class ArticuloseComponent implements OnInit {

  public respuesta: MsnApiArticulos;
  public articulo: IArticulo;
  public articulos: any;
  cuenta: any;

  public articuloid: string;
  nombre_articulo: any;
  descripcion: any;

  constructor(private aService: ArticulosService,
              private catService: CategoriasService,
              private cService: CuentasService,
              private route: ActivatedRoute,
              private filterAService: ArticulosfService,
              private mService: MensajesService,
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

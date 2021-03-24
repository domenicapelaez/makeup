import { IArticulo } from './../../../interfaces/ArticulosInterface';
import { ArticulosService } from './../../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from './../../../services/mensajes.service';
import { NavController } from '@ionic/angular';
import { CategoriasService } from './../../../services/categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent  {

  public articulo_id: string;
  nombre_articulo: any;
  descripcion: any;
  categoriaid: any;
  marcaid: any;
  precio: any;
  logo: any;

  public articulos: any;
  public articulo: IArticulo={
  };

  constructor(private categoriasService: CategoriasService,
              private navController: NavController, 
              private mService: MensajesService, 
              private route: ActivatedRoute,
              private aService: ArticulosService) {
    this.articulo_id = this.route.snapshot.paramMap.get('articulo_id');
   }

  async actualizar(fEditArticulo) {

    if (fEditArticulo.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.aService.actualizar(this.articulo_id, this.nombre_articulo, this.descripcion,this.categoriaid,this.marcaid,this.precio,this.logo);
    
    if ( peticion.status == 'success' ){
     this.mService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('articulos', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    }

}

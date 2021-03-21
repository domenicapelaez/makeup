import { ArticulosService } from './../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from './../../services/mensajes.service';
import { NavController } from '@ionic/angular';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editara',
  templateUrl: './editara.component.html',
  styleUrls: ['./editara.component.scss'],
})
export class EditaraComponent {

  public articulo_id: string;
  nombre_articulo: any;
  descripcion: any;

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
    
    const peticion = await this.aService.actualizar(this.articulo_id, this.nombre_articulo, this.descripcion);
    
    if ( peticion.status == 'success' ){
     this.mService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('categorias', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    }

}
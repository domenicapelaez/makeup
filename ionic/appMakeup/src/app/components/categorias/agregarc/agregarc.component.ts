import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './../../../services/categorias.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MensajesService } from './../../../services/mensajes.service';
import { ICategoria } from './../../../interfaces/ArticulosInterface';


@Component({
  selector: 'app-agregarc',
  templateUrl: './agregarc.component.html',
  styleUrls: ['./agregarc.component.scss'],
})
export class AgregarcComponent implements OnInit {

  newcat: ICategoria = {
    categoriaid: 7,
    nombre_categoria: 'Accesorios'
  }

  constructor(private cService: CategoriasService,
              private navCtrl: NavController,
              private menService: MensajesService) { }

  ngOnInit() {}

  async agregarc(fAgregarc) {

    if (fAgregarc.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.cService.agregarc( this.newcat);
    
    if ( peticion.status == 'success' ){
     this.menService.alertaInformativa( peticion.message );
     this.navCtrl.navigateRoot('agregarc', { animated: true });
      } 
    else {
    console.log(peticion);
    this.menService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }
}

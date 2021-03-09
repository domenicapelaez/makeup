import { ICategoria } from './../../interfaces/ArticulosInterface';
import { CategoriasService } from './../../services/categorias.service';
import { NavController } from '@ionic/angular';
import { MensajesService } from './../../services/mensajes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarc',
  templateUrl: './agregarc.component.html',
  styleUrls: ['./agregarc.component.scss'],
})
export class AgregarcComponent implements OnInit {

  newcategoria: ICategoria ={
    categoriaid: 1,
    nombre_categoria: 'otros',
    logo: 'otros.png'
  }

  constructor(private cService: CategoriasService,
              private navController: NavController,
              private mService: MensajesService) { }
ngOnInit() { }

   async agregarc(fAgregarc) {

    if (fAgregarc.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.cService.agregarc( this.newcategoria);
    
    if ( peticion.status == 'success' ){
     this.mService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('agregarc', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

  }
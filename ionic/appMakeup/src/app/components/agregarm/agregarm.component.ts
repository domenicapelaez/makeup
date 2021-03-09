import { ConfigService } from './../../services/config.service';
import { IMarca } from './../../interfaces/ArticulosInterface';
import { MensajesService } from './../../services/mensajes.service';
import { NavController } from '@ionic/angular';
import { MarcasService } from './../../services/marcas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarm',
  templateUrl: './agregarm.component.html',
  styleUrls: ['./agregarm.component.scss'],
})
export class AgregarmComponent implements OnInit {

  newmarca: IMarca ={
    marcaid: 1,
    nombre_marca: 'Revlon',
    logo: 'revlon.png'
  }

  rol: string;
  tipo: string;
  isActiveConfig: boolean = false;
  isClickConfig: boolean = false;
  isAdmin: boolean = false;

  constructor(private marService: MarcasService,
              private navController: NavController,
              private mService: MensajesService,
              public configService: ConfigService)
               { }
ngOnInit() { }

   async agregarm(fAgregarm) {

    if (fAgregarm.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.marService.agregarm( this.newmarca);
    
    if ( peticion.status == 'success' ){
     this.mService.alertaInformativa( peticion.message );
     this.navController.navigateRoot('agregam', { animated: true });
      } 
    else {
    console.log(peticion);
    this.mService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }

    pulsar(){
      this.configService.edicion();
    }
  }
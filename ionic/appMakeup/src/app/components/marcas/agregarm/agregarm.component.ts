import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';
import { NgForm, FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { MensajesService } from './../../../services/mensajes.service';
import { IMarca } from './../../../interfaces/ArticulosInterface';

@Component({
  selector: 'app-agregarm',
  templateUrl: './agregarm.component.html',
  styleUrls: ['./agregarm.component.scss'],
})
export class AgregarmComponent implements OnInit {

  newmarca: IMarca = {
    marcaid: 10,
    nombre_marca: 'Revlon'
  }

  constructor(private mService: MarcasService,
              private NavController: NavController,
              private menService: MensajesService) { }

    ngOnInit() {}

  async agregarm(fAgregarm) {

    if (fAgregarm.invalid) { return; }
      //console.log('error en datos');
    
    const peticion = await this.mService.agregarm( this.newmarca);
    
    if ( peticion.status == 'success' ){
     this.menService.alertaInformativa( peticion.message );
     this.NavController.navigateRoot('agregarm', { animated: true });
      } 
    else {
    console.log(peticion);
    this.menService.alertaInformativa( JSON.stringify(peticion.errors) );
     }
    
    }
}

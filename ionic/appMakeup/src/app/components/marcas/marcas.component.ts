import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MarcasService } from 'src/app/services/marcas.service';
import { IMarca } from './../../interfaces/ArticulosInterface';
import { CuentasService } from './../../services/cuentas.service';
import { environment } from './../../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {

  marcas: IMarca[];
  marca: any;
  rol: string;
  tipo: string;
  isActiveConfig: boolean = false;
  isClickConfig: boolean = false;
  isAdmin: boolean = false;

  constructor(private marcasService: MarcasService, 
              public cService: CuentasService, 
              private route: ActivatedRoute,
              public configService: ConfigService
) { 
    this.marca = this.route.snapshot.paramMap.get('marcaid');
  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
      this.marcas = respuesta.data;
      console.log(respuesta);
    }

    pulsar(){
      this.configService.edicion();
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from 'src/app/services/marcas.service';
import { IMarca } from './../../interfaces/ArticulosInterface';
import { environment } from './../../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent implements OnInit {

  marcas: IMarca;
  marca: any;

  constructor(private marcasService: MarcasService, private route: ActivatedRoute) { 
    this.marca = this.route.snapshot.paramMap.get('marcaid');
    console.log (this.marca);
    console.log(this.marcasService.getMarcas());
  }

  async ngOnInit() {
    let respuesta = await this.marcasService.getMarcas();
    if (respuesta.status == 'success'){
      this.marcas = respuesta.data;
      console.log(this.marcas);
    }
  }

  async ionViewWillEnter (){
    let respuesta = await this.marcasService.getMarcas();
    if (respuesta.status == 'success'){
      this.marcas = respuesta.data;
    }
  }

  articulos (marca){
    console.log (marca);
  }

}
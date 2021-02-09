import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from 'src/app/services/marcas.service';
import { IArticulo, IMarca } from './../../../interfaces/ArticulosInterface';
import { environment } from './../../../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  public marcaid: string;
  public marca: IMarca;
  public articulos: IArticulo;

  public bread: [
    {
      'nombre': 'Marcas', 'clase': 'active', 'link': [ '/', 'marcas']
    }
  ];

  constructor(private route: ActivatedRoute,
              private mService: MarcasService) { }

 async ngOnInit() {
    this.marcaid = this.route.snapshot.paramMap.get('marcaid');
    let respuesta = await this.mService.getArticulos(this.marcaid);
    if (respuesta.status == 'success'){
      this.marca = respuesta.data;
    }
  }

}

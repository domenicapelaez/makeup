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
  public marcas: IMarca;
  public marca: IMarca;
  public articulos: IArticulo[];

  constructor(private route: ActivatedRoute,
              private mService: MarcasService) { 
              }

 async ngOnInit() {
    this.marcaid = this.route.snapshot.paramMap.get('articulo_id');
    let respuesta = await this.mService.getArticulos(this.marcaid);
    //console.log('articulos');
    if (respuesta.status == 'success'){
      this.marca = respuesta.data[0];
      //console.log(this.marca);
      console.log(this.marcas);
    }
  }

}

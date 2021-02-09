import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from './../../../services/categorias.service';
import { ICategoria, IArticulo } from './../../../interfaces/ArticulosInterface';
import { environment } from './../../../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {


  public categoriaid: string;
  public categoria: ICategoria;
  public articulos: IArticulo;

  public bread: [
    {
      'nombre': 'Categorias', 'clase': 'active', 'link': [ '/', 'categorias']
    }
  ];

  constructor(private route: ActivatedRoute,
              private cService: CategoriasService) { }

 async ngOnInit() {
    this.categoriaid = this.route.snapshot.paramMap.get('categoriaid');
    let respuesta = await this.cService.getArticulos(this.categoriaid);
    if (respuesta.status == 'success'){
      this.categoria = respuesta.data;
    }
  }

}
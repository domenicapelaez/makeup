import { Component, OnInit } from '@angular/core';
import { IArticulo } from './../../../interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../../../services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {

  public articuloid: string;
  public articulos: IArticulo[];
  favorito: {};

  constructor(private aService: ArticulosService, 
	      private route: ActivatedRoute) {
    this.articuloid = this.route.snapshot.paramMap.get('articulo_id');
   }

  async ngOnInit() {
    let respuesta = await this.aService.showArticulos(this.articuloid); 
    this.articulos = respuesta.data;
    console.log(this.articulos);
  }

}

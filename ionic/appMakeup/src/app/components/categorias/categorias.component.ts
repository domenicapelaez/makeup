import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from './../../services/categorias.service';
import { ICategoria } from './../../interfaces/ArticulosInterface';
import { environment } from './../../../environments/environment';

const URL = environment.url;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: ICategoria;
  categoria: any;

  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute) {
    this.categoria = this.route.snapshot.paramMap.get('articulo_id');
    console.log (this.categoria);
    console.log(this.categoriasService.getCategorias());
   }

   async ngOnInit() {
     let respuesta = await this.categoriasService.getCategorias();
     if (respuesta.status == 'success'){
       this.categorias = respuesta.data;
       console.log(this.categorias);
     }
   }

   async ionViewWillEnter (){
     let respuesta = await this.categoriasService.getCategorias();
     if (respuesta.status == 'success'){
       this.categorias = respuesta.data;
     }
   }

   articulos (categoria) {
     console.log (categoria);
   }

}
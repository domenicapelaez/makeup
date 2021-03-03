import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriasService } from './../../services/categorias.service';
import { ICategoria } from './../../interfaces/ArticulosInterface';
import { CuentasService } from './../../services/cuentas.service';
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

  constructor(private categoriasService: CategoriasService, 
              public cService: CuentasService, 
              private route: ActivatedRoute) {

    this.categoria = this.route.snapshot.paramMap.get('categoriaid');
   }

   async ngOnInit() {
     let respuesta = await this.categoriasService.getCategorias();
       this.categorias = respuesta.data;
       console.log(respuesta);
     }
   }
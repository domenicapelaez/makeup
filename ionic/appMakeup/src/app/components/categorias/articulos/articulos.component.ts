import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from './../../../services/categorias.service';
import { CuentasService } from './../../../services/cuentas.service';
import { IArticulo, ICategoria, MsnApiCategorias } from './../../../interfaces/ArticulosInterface';
import { ArticulosService } from './../../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  public categoriaid: string;
  public categorias: ICategoria;
  public articulos: IArticulo[];
  public respuesta: MsnApiCategorias;
  cuenta: any;

  constructor(private route: ActivatedRoute,
              private catService: CategoriasService,
              private cService: CuentasService) { 

  this.categoriaid = this.route.snapshot.paramMap.get('categoriaid');
}

async ngOnInit() {
  let respuesta = await this.catService.getArticulos(this.categoriaid); 
  this.categorias = respuesta.data;
  console.log(this.categorias);
  this.cService.userStorageObservable
  .subscribe ( data => {
    this.cuenta = data;
  })
}
ionViewWillEnter (){
this.cService.userStorageObservable
  .subscribe ( data => {
    this.cuenta = data;
  })
}

async getCuenta() {
  this.cuenta = await this.cService.getCuentaStorage();
}
}
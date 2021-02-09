import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { CuentasService } from './cuentas.service';
import { MsnApiCategorias } from './../interfaces/ArticulosInterface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
    private httpOptions: any;

    constructor(private http: HttpClient, private cService: CuentasService) { }

cabecera (token) {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + token,
    })
  };
}

async getArticulos(categoriaid):Promise<MsnApiCategorias>{
  const token = await this.cService.getToken();
  const ruta = `${ URL }/public/api/admin/categorias/${categoriaid}/articulos`;
  this.cabecera(token);
  return new Promise ( resolve => {
    this.http.get<MsnApiCategorias>(ruta, this.httpOptions)
      .subscribe(respuesta =>{
        console.log(respuesta);
       // resolve(respuesta);
      });
  })
}

async getCategorias(): Promise<MsnApiCategorias>{
  const token = await this.cService.getToken();
  const ruta = `${ URL }/public/api/admin/categorias`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + token,
    })
  };
  return new Promise ( resolve => {
    this.http.get<MsnApiCategorias>(ruta, httpOptions)
      .subscribe ( respuesta => {
        resolve( respuesta );
      })
  })
}

}
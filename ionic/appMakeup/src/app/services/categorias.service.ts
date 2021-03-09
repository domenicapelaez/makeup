import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CuentasService } from './cuentas.service';
import { MsnApiCategorias, ICategoria, MsnApiAgregarc } from './../interfaces/ArticulosInterface';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
    public token: string = null;
    public categoria: ICategoria;

    constructor(private http: HttpClient, private cService: CuentasService, private storage: Storage) { }


async getArticulos(categoriaid):Promise<MsnApiCategorias>{
  console.log("categoriaid = ",categoriaid);
  const ruta = `${ URL }/public/api/admin/categorias/${categoriaid}/articulos`;
  //this.cabecera(token);
  return new Promise ( resolve => {
    this.http.get<MsnApiCategorias>(ruta)
      .subscribe( data =>{
        console.log(data);
        resolve(data);
      });
  })
}

async getCategorias(): Promise<MsnApiCategorias>{
  const ruta = `${ URL }/public/api/admin/categorias`;
  return new Promise ( resolve => {
    this.http.get<MsnApiCategorias>(ruta)
      .subscribe ( respuesta => {
        resolve( respuesta );
      })
  })
}

agregarc (categoria: ICategoria): Promise<MsnApiAgregarc>{
  console.log(categoria);

  const ruta = `${ URL }/public/api/agregarc`;
  const data = categoria;
  console.log (ruta, data);

  return new Promise ( resolve => {
    this.http.post<MsnApiAgregarc>(ruta, data)
      .subscribe (respuesta => {
        if (respuesta.status == 'success'){
          resolve(respuesta)
        }else{
          this.token = null;
          this.storage.clear();
          resolve (respuesta);
      }
    });
});
} 

}
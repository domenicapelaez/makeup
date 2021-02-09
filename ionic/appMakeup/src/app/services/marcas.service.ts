import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { CuentasService } from './cuentas.service';
import { MsnApiMarcas } from './../interfaces/ArticulosInterface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private httpOptions: any;

  constructor(private http: HttpClient, private cService: CuentasService) { }

  /* public getMarcas(){
    return this.http.get('http://makeup.test/makeup/public/api/admin/marcas');
  } */

  cabecera (token) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
  }

  async getArticulos(marcaid):Promise<MsnApiMarcas>{
    console.log("marcaid = ",marcaid);
    const token = await this.cService.getToken();
    const ruta = `${ URL }/public/api/admin/marcas/${marcaid}/articulos`;
    this.cabecera(token);
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta, this.httpOptions)
        .subscribe(respuesta =>{
          console.log(respuesta);
         // resolve(respuesta);
        });
    })
    
  }

 async getMarcas(): Promise<MsnApiMarcas>{
    const token = await this.cService.getToken();
    const ruta = `${ URL }/public/api/admin/marcas`;
    console.log(ruta);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      })
    };
    
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta, httpOptions)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }
}

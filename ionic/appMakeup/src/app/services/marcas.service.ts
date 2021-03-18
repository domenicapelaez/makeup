import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CuentasService } from './cuentas.service';
import { MsnApiMarcas, IMarca, MsnApiAgregarm } from './../interfaces/ArticulosInterface';
import { environment } from './../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  public token: string = null;
  public marca: IMarca;

  constructor(private http: HttpClient, private cService: CuentasService, private storage: Storage) { }

  /* public getMarcas(){
    return this.http.get('http://makeup.test/makeup/public/api/admin/marcas');
  } */


  async getArticulos(marcaid):Promise<MsnApiMarcas>{
    console.log("marcaid = ",marcaid);
    const ruta = `${ URL }/api/admin/marcas/${marcaid}/articulos`;
   // this.cabecera(token);
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta)
        .subscribe(data =>{
          console.log(data);
         resolve(data);
        });
    })
    
  }

 async getMarcas(): Promise<MsnApiMarcas>{
    const ruta = `${ URL }/api/admin/marcas`;
    return new Promise ( resolve => {
      this.http.get<MsnApiMarcas>(ruta)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }

  agregarm (marca: IMarca): Promise<MsnApiAgregarm>{
    console.log(marca);

    const ruta = `${ URL }/api/agregarm`;
    const data = marca;
    console.log (ruta, data);

    return new Promise ( resolve => {
      this.http.post<MsnApiAgregarm>(ruta, data)
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

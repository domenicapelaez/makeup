import { Storage } from '@ionic/storage';
import { CuentasService } from './cuentas.service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { MsnApiArticulos, IArticulo, MsnApiEditara } from './../interfaces/ArticulosInterface';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  
  public token: string = null;
  public articulo: IArticulo;
  public respuesta: MsnApiArticulos;

  constructor(private http: HttpClient, 
              private cService: CuentasService,
              private storage: Storage) { }

  async getArticulos(): Promise<MsnApiArticulos>{
    const ruta = `${ URL }/public/api/admin/articulos`;
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }

  async showArticulos(articuloid): Promise<MsnApiArticulos>{
    console.log('Articuloid =', articuloid);
    const ruta = `${ URL }/public/api/admin/articulos/${articuloid}`;
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
      .subscribe (respuesta => {
        resolve(respuesta);
      });
    })
  }

  public buscarArticulos( articulos: string) {
    return this.http.get(`http://makeup.test/makeup/public/api/admin/articulos`)
  }

  actualizara (articulo: IArticulo): Promise<MsnApiEditara>{
    console.log(articulo);

    const ruta = `${ URL }/api/editara`;
    const data = articulo;
    console.log (ruta, data);

    return new Promise ( resolve => {
      this.http.post<MsnApiEditara>(ruta, data)
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
  async borrar(articuloid): Promise<MsnApiArticulos>{
    const ruta = `${ URL }/api/articulos/${articuloid}/remove`;

  return new Promise ( resolve => {
    this.http.get<MsnApiArticulos>(ruta)
    .subscribe(data => {
      console.log(data);
      resolve(data);
    });
  });
}
}

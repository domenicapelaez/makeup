import { CuentasService } from './cuentas.service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { MsnApiArticulos, IArticulo } from './../interfaces/ArticulosInterface';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  
  public token: string = null;
  public articulo: IArticulo;
  public respuesta: MsnApiArticulos;

  constructor(private http: HttpClient, 
              private cService: CuentasService) { }

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
    
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { MsnApiArticulos, IArticulo } from './../../interfaces/ArticulosInterface';
import { Subject } from 'rxjs';
import { IFiltrosArticulos } from './../../interfaces/FiltrosInterfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ArticulosfService {

  respuesta: MsnApiArticulos;
  private articulosStorage = new Subject <IArticulo[]>();
  public articulosStorageObservable = this.articulosStorage.asObservable();

  constructor(private http: HttpClient) { }

  getFilter(filtros: IFiltrosArticulos): Promise<MsnApiArticulos>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json'
      })
    };

    let data = JSON.stringify(filtros);
    const ruta = `${URL}/api/articulos/filters`;
    console.log(data);
    return new Promise (resolve => {
      this.http.post<MsnApiArticulos>(ruta, {data} )
        .subscribe(datos => {
          console.log(datos);
         this.articulosStorage.next(datos.data);
            this.respuesta = datos;
              resolve(this.respuesta);
        });
    });
  }
}
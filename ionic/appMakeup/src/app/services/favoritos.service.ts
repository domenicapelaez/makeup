import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFavorito, MsnApiFavoritos } from './../interfaces/ArticulosInterface';
import { Injectable } from '@angular/core';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private http: HttpClient) { }

  async getnewFavoritos(favoritos: IFavorito): Promise<MsnApiFavoritos>{
    const ruta = `${ URL }/api/admin/newfavoritos`;
    const data = favoritos;

    console.log(favoritos, ruta);

    return new Promise (resolve => {
      this.http.post<MsnApiFavoritos>(ruta, data)
      .subscribe (respuesta => {
        console.log(respuesta);
        resolve(respuesta)
      })
    })
  }
}

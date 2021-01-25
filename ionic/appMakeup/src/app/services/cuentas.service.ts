import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { ICuenta, MsnApiLogin, MsnApiRegister } from './../interfaces/CuentaInterface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  token: string = null;
  public usuario: ICuenta;
  private userStorage = new Subject <ICuenta>();
  public userStorageObservable = this.userStorage.asObservable();

  constructor(private http: HttpClient, /* private storage: Storage / */){ }

  registro (usuario: ICuenta): Promise<MsnApiRegister>{

    const ruta = `${ URL }/public/api/registro`;
    const data = usuario;
    console.log (ruta, data);

    return new Promise ( resolve => {
      this.http.post<MsnApiRegister>(ruta, data)
        .subscribe (respuesta => {
          if (respuesta.status == 'success'){
            resolve(respuesta)
          }else{
            this.token = null;
            //this.storage.clear();
         resolve (respuesta);
        }
      });
  });
}

}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
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

  constructor(private http: HttpClient, private storage: Storage){ }

  login (email: string, password: string): Promise<MsnApiLogin>{
    const data = { email, password };
    const ruta = `${ URL }/public/api/login`;
    console.log (ruta, data);
    return new Promise( resolve => {
      this.http.post<MsnApiLogin>(ruta, data)
        .subscribe( respuesta => {          //hemos de hacer el TIPADO con INTERFACES
          if (respuesta.status == 'success'){
            this.saveToken(respuesta.token.access_token);
            this.saveUser(respuesta.user);
            //si llega aquí la promesa devuelve true indicando que todo ha sido OK
            resolve(respuesta);
          } else {
              this.token = null;
              this.storage.clear();
              //la promesa devuelve false indicando que ha habido un ERROR
              resolve (respuesta);
          }
      });
    });
  }
  
  //devuelve una promesa (async)
  async saveToken(token: string){ 
    this.token = token;
    //espero (await) a que se guarde el token en el storage antes de continuar
    await this.storage.set('token', token); 
  }

  async saveUser(user: ICuenta){ 
    this.usuario = user;
    await this.storage.set('usuario', user);
    this.userStorage.next(this.usuario);
  }

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
            this.storage.clear();
         resolve (respuesta);
        }
      });
  });
}


}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  public getArticulos(){
    return this.http.get('http://makeup.test/makeup/public/api/admin/articulos')
  }
}

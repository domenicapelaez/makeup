
import { Component, OnInit } from '@angular/core';
import { MarcasService } from './../../services/marcas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  marcas: any;

  constructor(private marServices: MarcasService) { }

  ngOnInit(){
 /* this.marServices.getMarcas()
    .subscribe(data => (
      this.marcas = data,
      console.log (data)
    )); */
  }

}
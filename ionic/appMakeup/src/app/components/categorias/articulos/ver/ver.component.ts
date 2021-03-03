import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../../../../services/articulos.service';
import { IArticulo } from './../../../../interfaces/ArticulosInterface';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent implements OnInit {

  public articuloid: string;
  public articulos: IArticulo[];

  constructor(private route: ActivatedRoute,
              private articulosService: ArticulosService
              ) {
  this.articuloid = this.route.snapshot.paramMap.get('articulo_id');
  }

  async ngOnInit() {
    let respuesta = await this.articulosService.showArticulos(this.articuloid); 
    this.articulos = respuesta.data;
    console.log(this.articulos);
  }
}

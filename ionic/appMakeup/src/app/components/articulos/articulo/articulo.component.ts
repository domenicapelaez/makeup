import { FavoritosService } from './../../../services/favoritos.service';
import { ICuenta } from './../../../interfaces/CuentaInterface';
import { CuentasService } from './../../../services/cuentas.service';
import { Component, OnInit } from '@angular/core';
import { IArticulo, IFavorito } from './../../../interfaces/ArticulosInterface';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../../../services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss'],
})
export class ArticuloComponent implements OnInit {

  public articuloid: string;
  public articulos: IArticulo[];
  cuentas: ICuenta;
  favorito: {};
  public fav: IFavorito = {
    articuloid: 0,
    cuentaid: 0
  };

  constructor(private aService: ArticulosService, 
	            private route: ActivatedRoute,
              private cService: CuentasService,
              private newFav: FavoritosService) {
    this.articuloid = this.route.snapshot.paramMap.get('articulo_id');
   }

  async ngOnInit() {
    let respuesta = await this.aService.showArticulos(this.articuloid); 
    this.articulos = respuesta.data;
    console.log(this.articulos);
  }

  async favorite(articuloid){
    this.favorito = !this.favorito;
    if (this.favorito) {
      console.log(this.cService.usuario.id, this.cService.usuario.id);
      this.fav.articuloid = articuloid;
      this.fav.cuentaid = this.cService.usuario.id;
      console.log(this.fav);
      let respuesta = await this.newFav.getnewFavoritos(this.favorito)
    }
    else {
      console.log(this.fav.cuentaid);
    }
  }
}

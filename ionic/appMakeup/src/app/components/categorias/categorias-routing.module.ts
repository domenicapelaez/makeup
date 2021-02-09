import { ArticulosComponent } from './articulos/articulos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';


const routes: Routes = [
  {
    path: '', component: CategoriasComponent,
      children: [
      ]
  },
  {
    path: 'articulos/:articulo_id', component: ArticulosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }

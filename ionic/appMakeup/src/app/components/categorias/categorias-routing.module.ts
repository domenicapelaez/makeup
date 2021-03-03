import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { VerComponent } from './articulos/ver/ver.component';

const routes: Routes = [
  {
    path: '', component: CategoriasComponent,
      children: [
      ]
  },
  {
    path: 'articulos/:categoriaid', component: ArticulosComponent
  },
  {
    path: 'articulos/:categoriaid/:articulo_id', component: VerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }

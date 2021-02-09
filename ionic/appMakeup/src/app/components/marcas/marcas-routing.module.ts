import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './marcas.component';
import { ArticulosComponent } from './../marcas/articulos/articulos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: MarcasComponent,
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
export class MarcasRoutingModule { }


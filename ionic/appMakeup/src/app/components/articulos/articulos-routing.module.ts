import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';

const routes: Routes = [
  {
    path: '', component: ArticulosComponent,
      children: [
        
      ]
  },
  {path: ':articulo_id', component: ArticuloComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }

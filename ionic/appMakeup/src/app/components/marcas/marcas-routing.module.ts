import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './marcas.component';
import { VerComponent } from './articulos/ver/ver.component';
import { ArticulosComponent } from './articulos/articulos.component';


const routes: Routes = [
  {
    path: '', component: MarcasComponent,
      children: [
      ]
  },
  {
    path: 'articulos/:marcaid', component: ArticulosComponent, 
  },
  {
    path: 'articulos/:marcaid/:articulo_id', component: VerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }


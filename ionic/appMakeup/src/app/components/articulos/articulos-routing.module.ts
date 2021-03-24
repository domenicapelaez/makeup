import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '', component: ArticulosComponent,
      children: [
        
      ]
  },
  {path: ':articulo_id', component: ArticuloComponent},
  {path: 'edit/:articulo_id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }

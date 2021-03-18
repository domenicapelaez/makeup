import { ArticulosbComponent } from './articulosb/articulosb.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'articulosb', component: ArticulosbComponent, outlet: 'secondary' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }

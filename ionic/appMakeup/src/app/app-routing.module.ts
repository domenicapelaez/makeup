import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/comunes/home/home.component';
import { LoginComponent } from './components/comunes/login/login.component';
import { NewComponent } from './components/comunes/new/new.component';
import { MenuComponent } from './components/comunes/menu/menu.component';
import { LikeComponent } from './components/comunes/like/like.component';
import { ContactoComponent } from './components/comunes/contacto/contacto.component';
import { CuentaComponent } from './components/comunes/cuenta/cuenta.component';
import { UsuarioComponent } from './components/comunes/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'marcas',
    loadChildren: () => import('./components/marcas/marcas.module').then(m => m.MarcasModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/categorias/categorias.module').then(m => m.CategoriasModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'new', component: NewComponent
  },
  {
    path: 'cuenta', component: CuentaComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'like', component: LikeComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'usuario', component: UsuarioComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

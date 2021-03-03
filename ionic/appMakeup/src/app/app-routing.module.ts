import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/comunes/home/home.component';
import { LoginComponent } from './components/comunes/login/login.component';
import { NewComponent } from './components/comunes/new/new.component';
import { MenuComponent } from './components/comunes/menu/menu.component';
import { LikeComponent } from './components/comunes/like/like.component';
import { ContactoComponent } from './components/comunes/contacto/contacto.component';
import { UsuarioComponent } from './components/comunes/usuario/usuario.component';
import { CompraComponent } from './components/comunes/compra/compra.component';
import { InfoComponent } from './components/comunes/info/info.component';
import { AgregarmComponent } from './components/marcas/agregarm/agregarm.component';
import { AgregarcComponent } from './components/categorias/agregarc/agregarc.component';
import { PreguntasComponent } from './components/comunes/preguntas/preguntas.component';
import { EmailComponent } from './components/comunes/email/email.component';
import { EnviosdevolucionesComponent } from './components/comunes/enviosdevoluciones/enviosdevoluciones.component';
import { FiltrosComponent } from './components/comunes/filtros/filtros.component';

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
  },
  {
    path: 'compra', component: CompraComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'agregarm', component: AgregarmComponent
  },
  {
    path: 'agregarc', component: AgregarcComponent
  },
  {
    path: 'enviosydevoluciones', component: EnviosdevolucionesComponent
  },
  {
    path: 'email', component: EmailComponent
  },
  {
    path: 'preguntas', component: PreguntasComponent
  },
  {
    path: 'filtros', component: FiltrosComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

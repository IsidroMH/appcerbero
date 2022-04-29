import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'una', component: PaginaUnoComponent },
        { path: 'dos', component: PaginaDosComponent },
        { path: '**', redirectTo: ''}
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }

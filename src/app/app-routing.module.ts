import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLanguageComponent } from './MicroService1/Component/languages/list-language/list-language.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { ListVersionsComponent } from './MicroService1/Component/versions/list-versions/list-versions.component';
import { ListDomaineComponent } from './MicroService1/Component/domaine/list-domaine/list-domaine.component';
import { ListMsComponent } from './MicroService1/Component/Ms/list-ms/list-ms.component';
import { ListMethodeComponent } from './MicroService1/Component/Methode/list-methode/list-methode.component';
import { ListProjetComponent } from './MicroService1/Component/Projet/list-projet/list-projet.component';

const routes: Routes = [
  {
    path : 'list-language',
    component : ListLanguageComponent
  },
  
  {
    path : 'list-versions',
    component : ListVersionsComponent
  },
 
  {
    path : 'list-domaine',
    component : ListDomaineComponent
  },

  {
    path : 'list-ms',
    component : ListMsComponent
  },
  {
    path : 'list-methode',
    component : ListMethodeComponent
  },
  {
    path : 'list-projet',
    component : ListProjetComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

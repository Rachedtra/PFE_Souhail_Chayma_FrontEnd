import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLanguageComponent } from './MicroService1/Component/languages/list-language/list-language.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { ListVersionsComponent } from './MicroService1/Component/versions/list-versions/list-versions.component';
import { ListDomaineComponent } from './MicroService1/Component/domaine/list-domaine/list-domaine.component';
import { ListMsComponent } from './MicroService1/Component/Ms/list-ms/list-ms.component';
import { ListMethodeComponent } from './MicroService1/Component/Methode/list-methode/list-methode.component';
import { ListProjetComponent } from './MicroService1/Component/Projet/list-projet/list-projet.component';
import { ListCategorieComponent } from './MicroService2/ComponentMS2/categorie/list-categorie/list-categorie.component';
import { ListVoteComponent } from './MicroService2/ComponentMS2/Vote/list-vote/list-vote.component';
import { ListCommentaireComponent } from './MicroService2/ComponentMS2/Commentaire/list-commentaire/list-commentaire.component';
import { ListDemandeInfoComponent } from './MicroService2/ComponentMS2/demande-info/list-demande-info/list-demande-info.component';
import { ListSousCategorieComponent } from './MicroService2/ComponentMS2/sous-categorie/list-sous-categorie/list-sous-categorie.component';
import { ListMsActiveComponent } from './MicroService1/Component/ms/list-ms-active/list-ms-active.component';
import { ListVerLangComponent } from './MicroService1/Component/version-language/list-ver-lang/list-ver-lang.component';
import { ListDomaineProjetComponent } from './MicroService1/Component/domaine-projet/list-domaine-projet/list-domaine-projet.component';
import { ListMsProjetComponent } from './MicroService1/Component/ms-projet/list-ms-projet/list-ms-projet.component';

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

  {
    path : 'list-Categorie',
    component : ListCategorieComponent
  },

  {
    path : 'list-vote',
    component : ListVoteComponent
  },

  {
    path : 'list-commentaire',
    component : ListCommentaireComponent
  },
  {
    path : 'list-demande-info',
    component : ListDemandeInfoComponent
  },
  
  {
    path : 'list-sous-categorie',
    component : ListSousCategorieComponent
  },

  {
    path : 'list-ms/list-ms-active',
    component : ListMsActiveComponent
  },

  {
    path : 'list-ver-lang',
    component : ListVerLangComponent
  },

  {
    path : 'list-domaine-projet',
    component : ListDomaineProjetComponent
  },
  {
    path : 'list-ms-projet',
    component : ListMsProjetComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

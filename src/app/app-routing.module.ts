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
import { ListCatInfoComponent } from './MicroService2/ComponentMS2/cat-info/list-cat-info/list-cat-info.component';
import { ListCommDemandeInfoComponent } from './MicroService2/ComponentMS2/comm-demande-info/list-comm-demande-info/list-comm-demande-info.component';
import { ListCommVoteComponent } from './MicroService2/ComponentMS2/comm-vote/list-comm-vote/list-comm-vote.component';
import { ListDomaineActiveComponent } from './MicroService1/Component/domaine/list-domaine-active/list-domaine-active.component';
import { ListDomaineProjetActiveComponent } from './MicroService1/Component/domaine-projet/list-domaine-projet-active/list-domaine-projet-active.component';
import { ListVerLangActiveComponent } from './MicroService1/Component/version-language/list-ver-lang-active/list-ver-lang-active.component';
import { ListMsProjetActiveComponent } from './MicroService1/Component/ms-projet/list-ms-projet-active/list-ms-projet-active.component';
import { InterfaceListComponent } from './Interface/interface-list/interface-list.component';
import { GetIdInfoComponent } from './Interface/get-id-info/get-id-info.component';
import { ListMsInteraceComponent } from './Interface/list-ms-interace/list-ms-interace.component';
import { GetIdMsComponent } from './Interface/get-id-ms/get-id-ms.component';
import { ListCommMsComponent } from './MicroService1/Component/comm-ms/list-comm-ms/list-comm-ms.component';

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
    path : 'list-domaine-active/list-domaine',
    component : ListDomaineComponent
  },
  {
    path : 'list-domaine-active',
    component : ListDomaineActiveComponent
  },
  {
    path : 'list-ms',
    component : ListMsComponent
  },
  {
    path : 'list-ms-active/list-ms',
    component : ListMsComponent
  },
  {
    path : 'list-ms-active',
    component : ListMsActiveComponent
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
    path : 'list-ver-lang',
    component : ListVerLangComponent
  },
  {
    path : 'list-ver-lang-active/list-ver-lang',
    component : ListVerLangComponent
  },
  {
    path : 'list-ver-lang-active',
    component : ListVerLangActiveComponent
  },

  {
    path : 'list-domaine-projet',
    component : ListDomaineProjetComponent
  },
  {
    path : 'list-domaine-projet-active/list-domaine-projet',
    component : ListDomaineProjetComponent
  },
  {
    path : 'list-domaine-projet-active',
    component : ListDomaineProjetActiveComponent
  },
  {
    path : 'list-ms-projet',
    component : ListMsProjetComponent
  },
  {
    path : 'list-ms-projet-active/list-ms-projet',
    component : ListMsProjetComponent
  },
  {
    path : 'list-ms-projet-active',
    component : ListMsProjetActiveComponent
  },
  {
    path : 'list-cat-info',
    component : ListCatInfoComponent
  },
  {
    path : 'list-comm-demande-info',
    component : ListCommDemandeInfoComponent
  },
{
  path : 'list-comm-vote',
  component : ListCommVoteComponent
},
{
  path : 'list-comm-ms',
  component : ListCommMsComponent
},
{
  path : 'interface-list',
  component : InterfaceListComponent
},
{
  path : 'list-ms-interface',
  component : ListMsInteraceComponent
},
{
  path : 'list-ms-interface/list-ms-interface/get-id-ms',
  component : GetIdMsComponent
},
{
  path : 'interface-list/get-id-info',
  component : GetIdInfoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

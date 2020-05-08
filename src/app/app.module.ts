import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { ToastrModule } from 'ngx-toastr'
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './MicroService1/Component/languages/languages.component';
import { LanguagesService } from './MicroService1/Services/languages.service';
import { FormsModule } from '@angular/forms';
import { BsModalRef, ModalModule ,BsModalService  } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination'  

import { ReactiveFormsModule } from '@angular/forms';
import { ListLanguageComponent } from './MicroService1/Component/languages/list-language/list-language.component';
import { VersionsComponent } from './MicroService1/Component/versions/versions.component';
import { ListVersionsComponent } from './MicroService1/Component/versions/list-versions/list-versions.component';
import { ListDomaineComponent } from './MicroService1/Component/domaine/list-domaine/list-domaine.component';
import { DomaineComponent } from './MicroService1/Component/domaine/domaine.component';
import { MsComponent } from './MicroService1/Component/ms/ms.component';
import { ListMsComponent } from './MicroService1/Component/Ms/list-ms/list-ms.component';
import { MethodeComponent } from './MicroService1/Component/methode/methode.component';
import { ListMethodeComponent } from './MicroService1/Component/Methode/list-methode/list-methode.component';
import { ProjetComponent } from './MicroService1/Component/projet/projet.component';
import { ListProjetComponent } from './MicroService1/Component/Projet/list-projet/list-projet.component';
import { CategorieComponent } from './MicroService2/ComponentMS2/categorie/categorie.component';
import { ListCategorieComponent } from './MicroService2/ComponentMS2/categorie/list-categorie/list-categorie.component';
import { VoteComponent } from './MicroService2/ComponentMS2/vote/vote.component';
import { ListVoteComponent } from './MicroService2/ComponentMS2/Vote/list-vote/list-vote.component';
import { CommentaireComponent } from './MicroService2/ComponentMS2/commentaire/commentaire.component';
import { ListCommentaireComponent } from './MicroService2/ComponentMS2/Commentaire/list-commentaire/list-commentaire.component';
import { DemandeInfoComponent } from './MicroService2/ComponentMS2/demande-info/demande-info.component';
import { ListDemandeInfoComponent } from './MicroService2/ComponentMS2/demande-info/list-demande-info/list-demande-info.component';
import { SousCategorieComponent } from './MicroService2/ComponentMS2/sous-categorie/sous-categorie.component';
import { ListSousCategorieComponent } from './MicroService2/ComponentMS2/sous-categorie/list-sous-categorie/list-sous-categorie.component';
import { ListMsActiveComponent } from './MicroService1/Component/ms/list-ms-active/list-ms-active.component';
import { MsActiveComponent } from './MicroService1/Component/ms/ms-active/ms-active.component';
import { VersionLanguageComponent } from './MicroService1/Component/version-language/version-language.component';
import { ListVerLangComponent } from './MicroService1/Component/version-language/list-ver-lang/list-ver-lang.component';
import { DomaineProjetComponent } from './MicroService1/Component/domaine-projet/domaine-projet.component';
import { ListDomaineProjetComponent } from './MicroService1/Component/domaine-projet/list-domaine-projet/list-domaine-projet.component';
import { MsProjetComponent } from './MicroService1/Component/ms-projet/ms-projet.component';
import { ListMsProjetComponent } from './MicroService1/Component/ms-projet/list-ms-projet/list-ms-projet.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    SidebarLeftComponent,
    GeneralLayoutComponent,
    FooterLeftComponent,
    FooterRightComponent,
    LanguagesComponent,
    ListLanguageComponent,
    VersionsComponent,
    ListVersionsComponent,
    DomaineComponent,
    ListDomaineComponent,
    MsComponent,
    ListMsComponent,
    MethodeComponent,
    ListMethodeComponent,
    ProjetComponent,
    ListProjetComponent,
    CategorieComponent,
    ListCategorieComponent,
    VoteComponent,
    ListVoteComponent,
    CommentaireComponent,
    ListCommentaireComponent,
    DemandeInfoComponent,
    ListDemandeInfoComponent,
    SousCategorieComponent,
    ListSousCategorieComponent,
    ListMsActiveComponent,
    MsActiveComponent,
    VersionLanguageComponent,
    ListVerLangComponent,
    DomaineProjetComponent,
    ListDomaineProjetComponent,
    MsProjetComponent,
    ListMsProjetComponent
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule ,
    BsDatepickerModule.forRoot(),
    FilterPipeModule



  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LanguagesComponent]
})
export class AppModule { }

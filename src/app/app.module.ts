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

import {RatingModule} from "ngx-rating";
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
import { VersionLanguageComponent } from './MicroService1/Component/version-language/version-language.component';
import { ListVerLangComponent } from './MicroService1/Component/version-language/list-ver-lang/list-ver-lang.component';
import { DomaineProjetComponent } from './MicroService1/Component/domaine-projet/domaine-projet.component';
import { ListDomaineProjetComponent } from './MicroService1/Component/domaine-projet/list-domaine-projet/list-domaine-projet.component';
import { MsProjetComponent } from './MicroService1/Component/ms-projet/ms-projet.component';
import { ListMsProjetComponent } from './MicroService1/Component/ms-projet/list-ms-projet/list-ms-projet.component';
import { CatInfoComponent } from './MicroService2/ComponentMS2/cat-info/cat-info.component';
import { ListCatInfoComponent } from './MicroService2/ComponentMS2/cat-info/list-cat-info/list-cat-info.component';
import { CommDemandeInfoComponent } from './MicroService2/ComponentMS2/comm-demande-info/comm-demande-info.component';
import { ListCommDemandeInfoComponent } from './MicroService2/ComponentMS2/comm-demande-info/list-comm-demande-info/list-comm-demande-info.component';
import { CommVoteComponent } from './MicroService2/ComponentMS2/comm-vote/comm-vote.component';
import { ListCommVoteComponent } from './MicroService2/ComponentMS2/comm-vote/list-comm-vote/list-comm-vote.component';
import { ListDomaineActiveComponent } from './MicroService1/Component/domaine/list-domaine-active/list-domaine-active.component';
import { ListDomaineProjetActiveComponent } from './MicroService1/Component/domaine-projet/list-domaine-projet-active/list-domaine-projet-active.component';
import { ListVerLangActiveComponent } from './MicroService1/Component/version-language/list-ver-lang-active/list-ver-lang-active.component';
import { ListMsProjetActiveComponent } from './MicroService1/Component/ms-projet/list-ms-projet-active/list-ms-projet-active.component';
import { NavHeaderComponent } from './Interface/nav-header/nav-header.component';
import { PopupComponent } from './Interface/popup/popup.component';
import { InterfaceListComponent } from './Interface/interface-list/interface-list.component';
import { CommComponent } from './Interface/comm/comm.component';
import { GetIdInfoComponent } from './Interface/get-id-info/get-id-info.component';
import { ListMsInteraceComponent } from './Interface/list-ms-interace/list-ms-interace.component';
import { GetIdMsComponent } from './Interface/get-id-ms/get-id-ms.component';
import { CommMsComponent } from './MicroService1/Component/comm-ms/comm-ms.component';
import { ListCommMsComponent } from './MicroService1/Component/comm-ms/list-comm-ms/list-comm-ms.component';
import { ListLanguageActiveComponent } from './MicroService1/Component/languages/list-language-active/list-language-active.component';
import { ListActiveVersionComponent } from './MicroService1/Component/versions/list-active-version/list-active-version.component';
import { ListMsComponent } from './MicroService1/Component/ms/list-ms/list-ms.component';
import { LisMethodeActiveComponent } from './MicroService1/Component/methode/lis-methode-active/lis-methode-active.component';
import { ListProjetActiveComponent } from './MicroService1/Component/projet/list-projet-active/list-projet-active.component';
import { ListCommMsActiveComponent } from './MicroService1/Component/comm-ms/list-comm-ms-active/list-comm-ms-active.component';
import { ListCatInfoActiveComponent } from './MicroService2/ComponentMS2/cat-info/list-cat-info-active/list-cat-info-active.component';
import { ListCategorieActiveComponent } from './MicroService2/ComponentMS2/categorie/list-categorie-active/list-categorie-active.component';
import { ListCommDemandeInfoeActiveComponent } from './MicroService2/ComponentMS2/comm-demande-info/list-comm-demande-infoe-active/list-comm-demande-infoe-active.component';
import { ListCommVoteActiveComponent } from './MicroService2/ComponentMS2/comm-vote/list-comm-vote-active/list-comm-vote-active.component';
import { ListCommmentaireActiveComponent } from './MicroService2/ComponentMS2/commentaire/list-commmentaire-active/list-commmentaire-active.component';
import { ListDemandeInfoActiveComponent } from './MicroService2/ComponentMS2/demande-info/list-demande-info-active/list-demande-info-active.component';
import { ListSousCategorieActiveComponent } from './MicroService2/ComponentMS2/sous-categorie/list-sous-categorie-active/list-sous-categorie-active.component';
import { CommentairesMsComponent } from './Interface/commentaires-ms/commentaires-ms.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CommonModule } from '@angular/common';





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
    VersionLanguageComponent,
    ListVerLangComponent,
    DomaineProjetComponent,
    ListDomaineProjetComponent,
    MsProjetComponent,
    ListMsProjetComponent,
    CatInfoComponent,
    ListCatInfoComponent,
    CommDemandeInfoComponent,
    ListCommDemandeInfoComponent,
    CommVoteComponent,
    ListCommVoteComponent,
    ListDomaineActiveComponent,
    ListDomaineProjetActiveComponent,
    ListVerLangActiveComponent,
    ListMsProjetActiveComponent,
    NavHeaderComponent,
    PopupComponent,
    InterfaceListComponent,
    CommComponent,
    GetIdInfoComponent,
    ListMsInteraceComponent,
    GetIdMsComponent,
    CommMsComponent,
    ListCommMsComponent,
    ListLanguageActiveComponent,
    ListActiveVersionComponent,
    ListMsComponent,
    LisMethodeActiveComponent,
    ListProjetActiveComponent,
    ListCommMsActiveComponent,
    ListCatInfoActiveComponent,
    ListCategorieActiveComponent,
    ListCommDemandeInfoeActiveComponent,
    ListCommVoteActiveComponent,
    ListCommmentaireActiveComponent,
    ListDemandeInfoActiveComponent,
    ListSousCategorieActiveComponent,
    CommMsComponent,
    CommentairesMsComponent,
    HomeComponent,
    AuthentificationComponent
  


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
    FilterPipeModule,
    RatingModule,
    CommonModule



  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LanguagesComponent,MethodeComponent]
})
export class AppModule { }

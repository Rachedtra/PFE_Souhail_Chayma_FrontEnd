import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';

import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './MicroService1/Component/languages/languages.component';
import { LanguagesService } from './MicroService1/Services/languages.service';
import { FormsModule } from '@angular/forms';


import { ReactiveFormsModule } from '@angular/forms';
import { ListLanguageComponent } from './MicroService1/Component/languages/list-language/list-language.component';
import { DomaineComponent } from './MicroService1/component/domaine/domaine.component';
import { ListDomaineComponent } from './MicroService1/component/Domaine/list-domaine/list-domaine.component';
import {VersionsComponent} from './MicroService1/component/Versions/versions.component';
import { ListVersionsComponent } from './MicroService1/component/Versions/list-versions/list-versions.component';
import { VoteComponent } from './MicroService2/Component2/vote/vote.component';
import { ListVoteComponent } from './MicroService2/Component2/Vote/list-vote/list-vote.component';


import { from } from 'rxjs';
import { CategorieComponent } from './MicroService2/Component2/categorie/categorie.component';
import { ListCategorieComponent } from './MicroService2/Component2/list-categorie/list-categorie.component';


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
    DomaineComponent,
    ListDomaineComponent,
    VersionsComponent,
    ListVersionsComponent,
    VoteComponent,
    ListVoteComponent,
    CategorieComponent,
    ListCategorieComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './navbar/header-navbar/header-navbar.component';
import { SidebarLeftComponent } from './navbar/sidebar-left/sidebar-left.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { FooterLeftComponent } from './navbar/footer-left/footer-left.component';
import { FooterRightComponent } from './navbar/footer-right/footer-right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr'
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './MicroService1/Component/languages/languages.component';
import { LanguagesService } from './MicroService1/Services/languages.service';
import { FormsModule } from '@angular/forms';
import { BsModalRef, ModalModule ,BsModalService  } from 'ngx-bootstrap/modal';


import { ReactiveFormsModule } from '@angular/forms';
import { ListLanguageComponent } from './MicroService1/Component/languages/list-language/list-language.component';




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
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LanguagesComponent]
})
export class AppModule { }

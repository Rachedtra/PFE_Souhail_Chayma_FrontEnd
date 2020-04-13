import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { LanguagesComponent } from '../languages.component';


@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {
  lang: Languages[] = new Array();
  modalRef: BsModalRef;
  constructor(private langservice: LanguagesService , private modalService: BsModalService) { }

  ngOnInit() {
    this.langservice.refreshList(); 
    this.resetForm();
  }


  resetForm() {
    this.langservice.form.setValue({
      idLanguage: "00000000-0000-0000-0000-000000000000",
      label: "",
       microServices:"",
       versionLanguages : ""
    });
  }



  DeleteLang(idLanguage: string) {
    this.langservice.DeleteLang(idLanguage).subscribe(res => {
      console.log(res);
      this.langservice.refreshList(); 
    })


  }
  

  openModal(template: TemplateRef<LanguagesComponent>) {
    this.modalRef = this.modalService.show(template);
  
  }
  

  EditLang(language : Languages , template: TemplateRef<LanguagesComponent>) {
    this.langservice.form.setValue(language);
    this.modalRef = this.modalService.show(template);
  }


}

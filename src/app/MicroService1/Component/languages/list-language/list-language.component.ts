import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { LanguagesComponent } from '../languages.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {
  lang: Languages[] = new Array();
  modalRef: BsModalRef;
  modalRef1: BsModalRef;

  constructor(private langservice: LanguagesService , private modalService: BsModalService,
    private toastrService : ToastrService) { }

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



  DeleteLang(idLanguage: string ) {
   
      
    this.langservice.DeleteLang(idLanguage).subscribe(res => {
      console.log(res);
      this.langservice.refreshList(); 
     

    })

  
  }
  

  openModal(templatee: TemplateRef<LanguagesComponent>) {
    this.modalRef = this.modalService.show(templatee);
  
  }
  

   ConfirmModal(template: TemplateRef<any>) {
     this.modalRef1 = this.modalService.show(template, {class: 'modal-sm'});
   }
 
  confirm(): void {
   
    this.modalRef1.hide();
    this.toastrService.success('Language Supprimee Avec Succés','Order Submitted !') ;
  }
 
  decline(): void {
  
    this.modalRef1.hide();
    this.toastrService.error('Language Non Supprimee','Order Submitted !') ;
  }

  EditLang(language : Languages , template: TemplateRef<LanguagesComponent>) {
    this.langservice.form.setValue(language);
    this.modalRef = this.modalService.show(template);
  }


}

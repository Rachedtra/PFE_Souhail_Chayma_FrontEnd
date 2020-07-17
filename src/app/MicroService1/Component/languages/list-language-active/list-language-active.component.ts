import { Component, OnInit, TemplateRef } from '@angular/core';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesComponent } from '../languages.component';

@Component({
  selector: 'app-list-language-active',
  templateUrl: './list-language-active.component.html',
  styleUrls: ['./list-language-active.component.css']
})
export class ListLanguageActiveComponent implements OnInit {

  lang: Languages[] = new Array();
  languageActiveFilter: any = { label: '' };



  constructor(private langservice: LanguagesService, private modalService: BsModalService,
    private toastrService: ToastrService,

  ) { }
  modalRef: BsModalRef;

  ngOnInit() {
    this.langservice.langActive
    this.langservice.LanguagesActive();
    this.resetFormLangActive();
  }


  resetFormLangActive() {
    this.langservice.form.setValue({
      idLanguage: "00000000-0000-0000-0000-000000000000",
      label: "",
      microServices: "",
      versionLanguages: "",
      isActiveLang : true ,
    });
  }



  DeleteLang(idLanguage: string) {

    this.langservice.DeleteLang(idLanguage).subscribe(res => {
      console.log(res);
      this.langservice.LanguagesActive();
      this.langservice.refreshList();
    })
  }


  openModalLangActive(templatee: TemplateRef<LanguagesComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }


  ConfirmModalLangActive(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmLangActive(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Language Supprimee Avec Succés');
  }

  declineLangActive(): void {

    this.modalRef.hide();
    this.toastrService.warning('', 'Language Non Supprimee');
  }

  EditLang(language: Languages) {
    this.langservice.form.setValue(language);
    this.modalRef = this.modalService.show(LanguagesComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  }

  AddLang() {
    this.resetFormLangActive();
    this.modalRef = this.modalService.show(LanguagesComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  }


}

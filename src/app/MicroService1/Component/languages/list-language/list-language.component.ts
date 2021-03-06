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
  languageFilter: any = { label: '' };

  

  constructor(private langservice: LanguagesService, private modalService: BsModalService,
    private toastrService: ToastrService,

  ) { }
  modalRef: BsModalRef;

  ngOnInit() {
    this.langservice.refreshList();
    this.resetForm();
  }


  resetForm() {
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
      this.langservice.refreshList();
    })
  }


  openModal(templatee: TemplateRef<LanguagesComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }


  ConfirmModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Language Supprimee Avec Succés');
  }

  decline(): void {

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
    this.resetForm();
    this.modalRef = this.modalService.show(LanguagesComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  }


}

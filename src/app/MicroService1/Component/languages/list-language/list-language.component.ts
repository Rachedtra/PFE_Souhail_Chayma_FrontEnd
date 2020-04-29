import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { LanguagesComponent } from '../languages.component';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {
  lang: Languages[] = new Array();
  modalRef: BsModalRef;
  

  constructor(private langservice: LanguagesService, private modalService: BsModalService,
    private toastrService: ToastrService,

  ) { }

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

  EditLang(language: Languages, templatee: TemplateRef<LanguagesComponent>) {
    this.langservice.form.setValue(language);
    this.modalRef = this.modalService.show(templatee);

  }

  AddLang(templatee: TemplateRef<LanguagesComponent>) {
    this.resetForm();
    this.modalRef = this.modalService.show(templatee);

  }


}

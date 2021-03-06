import { Languages } from './../../Models/Languages.models';
import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../Services/languages.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  //lang: any = [];
  lang: Languages[] = new Array();


  constructor(private langservice: LanguagesService,
    private toastrService: ToastrService,
    private modalService: BsModalService,
    public   modalRef: BsModalRef
   ) { }
  ngOnInit() {


    // this.resetForm();
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  resetForm() {

    this.langservice.form.setValue({
      idLanguage: "00000000-0000-0000-0000-000000000000",
      label: "",
      microServices: "",
      versionLanguages: "",
      isActiveLang : true ,
    });

  }


  onSubmit() {

    if (this.langservice.form.controls.idLanguage.value == "00000000-0000-0000-0000-000000000000")
      this.insertRecord();
    else
      this.UpdateRecord();

  }


  insertRecord() {
    this.langservice.PostLang().subscribe(
      res => {
        console.log(res);
        this.langservice.refreshList();
        this.langservice.LanguagesActive() ;
        this.modalRef.hide(); 
        this.toastrService.success('', 'Language Ajoutee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Language Non Ajoutee', 'Erreur');
      }
    )
  }


  UpdateRecord() {
    this.langservice.PutLang().subscribe(
      res => {
        console.log(res);
        this.langservice.refreshList();
        this.langservice.LanguagesActive() ;
        this.modalRef.hide(); 

        this.toastrService.info('', 'Language Modifiee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Language Non Modifiee', 'Erreur');
      }
    )
  }

}


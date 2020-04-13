import { Languages } from './../../Models/Languages.models';
import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../Services/languages.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  //lang: any = [];
  lang: Languages[] = new Array();
  modalRef: BsModalRef;

  constructor( private langservice: LanguagesService ,private modalService: BsModalService ) { }
  ngOnInit() {

  
    this.resetForm();
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  resetForm() {

    this.langservice.form.setValue({
      idLanguage: "00000000-0000-0000-0000-000000000000",
      label: "",
       microServices:"",
       versionLanguages : ""
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
       this.resetForm() ; 
      },
      err => {
        console.log(err);
      }
    )
  }


  UpdateRecord() {
    this.langservice.PutLang().subscribe(
      res => {
       
        console.log(res);
        this.langservice.refreshList(); 
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }
}


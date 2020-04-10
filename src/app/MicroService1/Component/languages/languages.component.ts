import { Languages } from './../../Models/Languages.models';
import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../Services/languages.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  //lang: any = [];
  lang: Languages[] = new Array();


  constructor(private formBuilder: FormBuilder, private langservice: LanguagesService) { }
  ngOnInit() {

    this.resetForm();
  }

  resetForm() {

    this.langservice.form.setValue({
      idLanguage: "00000000-0000-0000-0000-000000000000",
      label: "",
      microServices: "",
      versionLanguages: ""
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
        this.resetForm();
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


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

    this.GetLang();
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
        this.GetLang();

      },
      err => {
        console.log(err);
      }
    )
  }


  UpdateRecord() {
    this.langservice.PutLang(this.langservice.form.value).subscribe(
      res => {
        console.log(res);
        this.GetLang();

      },
      err => {
        console.log(err);
      }
    )
  }


  GetLang() {
    this.langservice.GetLang().subscribe(res => {
      this.lang = res as Languages[];
      console.log(this.lang);

    });
  }

  EditLang(language , idLanguage) {
    this.langservice.form.setValue(language , idLanguage);
    // this.langservice.DeleteLang(language.idLanguage).subscribe(res => {
    //   console.log(res);
    //   this.GetLang();
    //})


  }

  DeleteLang(idLanguage: string) {
    this.langservice.DeleteLang(idLanguage).subscribe(res => {
      console.log(res);
      this.GetLang();
    })


  }

}

 // clickAdd() {

  //   this.la = new Languages();
  // }

  // private save() {

  //     this.service.PostLang(this.la).subscribe(data => {
  //       console.log(data);
  //          })

  //       }

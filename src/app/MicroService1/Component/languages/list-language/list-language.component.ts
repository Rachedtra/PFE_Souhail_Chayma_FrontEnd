import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';

@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {
  lang: Languages[] = new Array();

  constructor(private langservice: LanguagesService) { }

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

  EditLang(language) {
    this.langservice.form.setValue(language);
    // this.langservice.DeleteLang(language.idLanguage).subscribe(res => {
    //   console.log(res);
    //   this.GetLang();
    //})


  }

}

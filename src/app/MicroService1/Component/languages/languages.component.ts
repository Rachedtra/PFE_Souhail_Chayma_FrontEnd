import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../Services/languages.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  lang : any  =[] ;
  constructor(private langservice : LanguagesService) { }

  ngOnInit() {
    this.GetLang () ; 
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
     form.form.reset();
   this.langservice.formData = {
      idLanguage: '',
     label: '',
      microServices: '',
     versionLanguages: '',  
   }
  
  }

  onSubmit(form: NgForm) {
    if (this.langservice.formData.idLanguage == '')
     this.insertRecord(form);
  }


  insertRecord(form: NgForm) {
    this.langservice.PostLang().subscribe(
       res => {
        this.resetForm(form);
        window.location.reload() ; 
    },
      err => {
        console.log(err);
       }
    )
    }


  GetLang(){
    this.langservice.GetLang().subscribe(res=>{this.lang=res ; 
  }) 
}



DeleteLang(idLanguage : string)
{
  this.langservice.DeleteLang(idLanguage).subscribe(res=>{this.lang=res;
  })
  window.location.reload() ; 
 
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

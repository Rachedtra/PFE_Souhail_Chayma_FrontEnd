import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from '../Models/Languages.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  //formData: Languages;
  // formData: FormData = new FormData();
lang: Languages[] = new Array();
  form: FormGroup = new FormGroup({
    idLanguage: new FormControl(""),
    //idLanguage: new FormControl("", Validators.required),
    // date: new FormControl("", Validators.required),
    // nbre_Heurs_Total: new FormControl("", [
    //   Validators.required,
    //   Validators.pattern(/^-?(0|[0-9]\d*)?$/)
    // ]),

    label: new FormControl(""),
     microServices : new FormControl(""), 
     versionLanguages  : new FormControl(""), 
     isActiveLang : new FormControl(""), 

  });
  constructor(private _http: HttpClient) { }

  // GetLang() {
  //   return this._http.get('http://localhost:54735/api/Languages');
  // }
  DeleteLang(id) {
    return this._http.delete('http://localhost:54735/api/Languages/' + id,
      { responseType: "text" });
  }

  PostLang() {
    return this._http.post('http://localhost:54735/api/Languages',this.form.value,
      { responseType: "text" });
  }
  PutLang() {
    return this._http.put('http://localhost:54735/api/Languages',this.form.value,
      { responseType: "text" });
  }
  refreshList(){

    this._http.get('http://localhost:54735/api/Languages').subscribe(res => {
      this.lang = res as Languages[];
      console.log(this.lang);

    });

  }

}

import { Injectable } from '@angular/core';
import { VersionLanguage } from '../Models/VersionLanguage.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VersionLanguageService {
  verlang: VersionLanguage[] = new Array();

  form: FormGroup = new FormGroup({
    idVl: new FormControl(""),
    idVersion: new FormControl(""),
    idLanguage: new FormControl(""),
    isActiveVerLang: new FormControl(""),
    numeroVersion: new FormControl(""),
    labelLanguage: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteVerLang(id) {
    return this._http.delete('http://localhost:54735/api/VersionLanguage/' + id,
      { responseType: "text" });
  }

  PostVerLang() {
    return this._http.post('http://localhost:54735/api/VersionLanguage', this.form.value,
      { responseType: "text" });
  }


  PutVerLang() {
    return this._http.put('http://localhost:54735/api/VersionLanguage', this.form.value,
      { responseType: "text" });
  }

  getVerLang() {

    this._http.get('http://localhost:54735/api/VersionLanguage').subscribe(res => {
      this.verlang = res as VersionLanguage[];
      console.log(this.verlang);
      console.log("rachedtest" + res);


    });


  }
}

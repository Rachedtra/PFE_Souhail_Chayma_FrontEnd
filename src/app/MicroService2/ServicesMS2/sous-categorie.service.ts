import { Injectable } from '@angular/core';
import { SousCategorie } from '../ModelsMS2/SousCategorie.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  sousCat: SousCategorie[] = new Array();
  sousCatActive: SousCategorie[] = new Array();

  form: FormGroup = new FormGroup({
    idSousCate: new FormControl(""),
    label: new FormControl(""),
    catFK: new FormControl(""),
    catLabel : new FormControl(""),
    isActiveSousCat: new FormControl(""),

  });


  constructor(private _http: HttpClient) { }

  DeleteSousCat(id) {
    return this._http.delete('http://localhost:58540/api/SousCategories/' + id,
      { responseType: "text" });
  }

  PostSousCat() {
    return this._http.post('http://localhost:58540/api/SousCategories', this.form.value,
      { responseType: "text" });
  }


  PutSousCat() {
    return this._http.put('http://localhost:58540/api/SousCategories', this.form.value,
      { responseType: "text" });
  }

  GetSousCat() {

    this._http.get('http://localhost:58540/api/SousCategories').subscribe(res => {
      this.sousCat = res as SousCategorie[];
      console.log(this.sousCat);
      console.log("rachedtest" + res);


    });


  }
  SousCategorieActive() {

    this._http.get('http://localhost:58540/api/SousCategories/GetActiveListSousCategories').subscribe(res => {
      this.sousCatActive = res as SousCategorie[];
      console.log(this.sousCatActive);
      console.log("rachedtest" + res);


    });


  }
}

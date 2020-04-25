import { Injectable } from '@angular/core';
import { SousCategorie } from '../ModelsMS2/SousCategorie.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  sousCat: SousCategorie[] = new Array();

  form: FormGroup = new FormGroup({
    idSousCate: new FormControl(""),
    label: new FormControl(""),
    catFK: new FormControl(""),
    categories: new FormControl(""),

  });


  constructor(private _http: HttpClient) { }

  DeleteSousCat(id) {
    return this._http.delete('http://localhost:58540/api/SousCategorie/' + id,
      { responseType: "text" });
  }

  PostSousCat() {
    return this._http.post('http://localhost:58540/api/SousCategorie', this.form.value,
      { responseType: "text" });
  }


  PutSousCat() {
    return this._http.put('http://localhost:58540/api/SousCategorie', this.form.value,
      { responseType: "text" });
  }

  GetSousCat() {

    this._http.get('http://localhost:58540/api/SousCategorie').subscribe(res => {
      this.sousCat = res as SousCategorie[];
      console.log(this.sousCat);
      console.log("rachedtest" + res);


    });


  }
}

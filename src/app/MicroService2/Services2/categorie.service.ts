import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../Models2/Categorie.Models2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  Cat: Categorie[] = new Array();

  form: FormGroup = new FormGroup({
    idCat: new FormControl(""),
    label: new FormControl(""),
    catDemandeInfos: new FormControl(""),
    sousCategories: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteCat(id) {
    return this._http.delete('http://localhost:58540/api/Categorie/' + id,
      { responseType: "text" });
  }
  
  PostCat() {
    return this._http.post('http://localhost:58540/api/Categorie', this.form.value,
      { responseType: "text" });
  }

  PutCat() {
    return this._http.put('http://localhost:58540/api/Categorie', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:58540/api/Categorie').subscribe(res => {
      this.Cat = res as Categorie[];
      console.log(this.Cat);
      console.log("rachedtest" + res);


    });

  }
}

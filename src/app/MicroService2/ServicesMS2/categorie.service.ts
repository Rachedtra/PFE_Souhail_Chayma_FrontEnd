import { Injectable } from '@angular/core';
import { Categorie } from '../ModelsMS2/categorie.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  cat: Categorie[] = new Array();
  catActive: Categorie[] = new Array();

  form: FormGroup = new FormGroup({
    idCat: new FormControl(""),
    label: new FormControl(""),
    catDemandeInfos: new FormControl(""),
    sousCategories: new FormControl(""),
    isActiveCat : new FormControl(""),
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

  GetCat() {

    this._http.get('http://localhost:58540/api/Categorie').subscribe(res => {
      this.cat = res as Categorie[];
      console.log(this.cat);
      console.log("rachedtest" + res);


    });
}
CategorieActive() {

  this._http.get('http://localhost:58540/api/Categorie/GetActiveListCategorie').subscribe(res => {
    this.catActive = res as Categorie[];
    console.log(this.catActive);
    console.log("rachedtest" + res);


  });
}
}
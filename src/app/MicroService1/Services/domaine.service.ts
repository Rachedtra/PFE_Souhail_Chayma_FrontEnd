import { Injectable } from '@angular/core';
import { Domaine } from '../Models/Domaine.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {


  Dom: Domaine[] = new Array();

  form: FormGroup = new FormGroup({
    idDomain: new FormControl(""),
    nom: new FormControl(""),
    domainProjets: new FormControl(""),
    isActiveDomaine : new FormControl(""),
  });

  constructor(private _http: HttpClient) { }


  DeleteDom(id) {
    return this._http.delete('http://localhost:54735/api/Domaine/' + id,
      { responseType: "text" });
  }

  PostDom() {
    return this._http.post('http://localhost:54735/api/Domaine', this.form.value,
      { responseType: "text" });
  }


  PutDom() {
    return this._http.put('http://localhost:54735/api/Domaine', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:54735/api/Domaine').subscribe(res => {
      this.Dom = res as Domaine[];
      console.log(this.Dom);
      console.log("rachedtest" + res);


    });

  }



}

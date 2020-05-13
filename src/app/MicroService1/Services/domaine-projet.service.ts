import { Injectable } from '@angular/core';
import { DomaineProjet } from '../Models/DomaineProjet.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomaineProjetService {

  domProjet: DomaineProjet[] = new Array();
  DomProjetActive : DomaineProjet[] = new Array();

  form: FormGroup = new FormGroup({
    idDomainProjet: new FormControl(""),
    idDomain: new FormControl(""),
    idProjet: new FormControl(""),
    isActiveDomPro: new FormControl(""),
    nomDomaine: new FormControl(""),
    nomProjet: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteDomProjet(id) {
    return this._http.delete('http://localhost:54735/api/DomaineProjet/' + id,
      { responseType: "text" });
  }

  PostDomProjet() {
    return this._http.post('http://localhost:54735/api/DomaineProjet', this.form.value,
      { responseType: "text" });
  }


  PutDomProjet() {
    return this._http.put('http://localhost:54735/api/DomaineProjet', this.form.value,
      { responseType: "text" });
  }

  getDomProjet() {

    this._http.get('http://localhost:54735/api/DomaineProjet').subscribe(res => {
      this.domProjet = res as DomaineProjet[];
      console.log(this.domProjet);
      console.log("rachedtest" + res);


    });


  }

  ListActiveDomProjet() {

    this._http.get('http://localhost:54735/api/DomaineProjet/GetActiveListDomaineProjet').subscribe(res => {
      this.DomProjetActive = res as DomaineProjet[];
      console.log(this.DomProjetActive);
      console.log("rachedtest" + res);


    });


  }
}

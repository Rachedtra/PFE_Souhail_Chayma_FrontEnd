import { Injectable } from '@angular/core';
import { Projet } from '../Models/Projet.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  
  proj: Projet[] = new Array();

  pj: FormGroup = new FormGroup({
    idProjet: new FormControl(""),
    nom: new FormControl(""),
    description: new FormControl(""), 
    domainProjets: new FormControl(""),
    msprojet: new FormControl(""),
    isActiveProjet : new FormControl(""),
  });

  constructor(private _http: HttpClient) { }





  DeleteProjet(id) {
    return this._http.delete('http://localhost:54735/api/Projet/' + id,
      { responseType: "text" });
  }

  PostProjet() {
    return this._http.post('http://localhost:54735/api/Projet', this.pj.value,
      { responseType: "text" });
  }


  PutProjet() {
    return this._http.put('http://localhost:54735/api/Projet', this.pj.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:54735/api/Projet').subscribe(res => {
      this.proj = res as Projet[];
      console.log(this.proj);
      console.log("rachedtest" + res);


    });


  }
}

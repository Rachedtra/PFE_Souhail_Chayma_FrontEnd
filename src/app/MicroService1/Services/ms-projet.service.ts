import { Injectable } from '@angular/core';
import { MsProjet } from '../Models/MsProjet.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsProjetService {

  MsProj: MsProjet[] = new Array();

  form: FormGroup = new FormGroup({
    idMsProjet: new FormControl(""),
    idMs: new FormControl(""),
    idProjet: new FormControl(""),
    isActiveMsVer: new FormControl(""),
    labelMS: new FormControl(""),
    nomProjet: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteMsProjet(id) {
    return this._http.delete('http://localhost:54735/api/MsProjet/' + id,
      { responseType: "text" });
  }

  PostMsProjet() {
    return this._http.post('http://localhost:54735/api/MsProjet', this.form.value,
      { responseType: "text" });
  }


  PutMsProjet() {
    return this._http.put('http://localhost:54735/api/MsProjet', this.form.value,
      { responseType: "text" });
  }

  getMsProjet() {

    this._http.get('http://localhost:54735/api/MsProjet').subscribe(res => {
      this.MsProj = res as MsProjet[];
      console.log(this.MsProj);
      console.log("rachedtest" + res);


    });


  }
}

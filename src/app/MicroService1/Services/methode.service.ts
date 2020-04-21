import { Injectable } from '@angular/core';
import { Methode } from '../Models/Methode.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodeService {

  method: Methode[] = new Array();

  form: FormGroup = new FormGroup({
    idMethode: new FormControl(""),
    nom: new FormControl(""),
    description: new FormControl(""),
    input: new FormControl(""),
    output: new FormControl(""),
    microService: new FormControl(""),
    msFk: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }





  DeleteMethode(id) {
    return this._http.delete('http://localhost:54735/api/Methode/' + id,
      { responseType: "text" });
  }

  PostMethode() {
    return this._http.post('http://localhost:54735/api/Methode', this.form.value,
      { responseType: "text" });
  }


  PutMethode() {
    return this._http.put('http://localhost:54735/api/Methode', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:54735/api/Methode').subscribe(res => {
      this.method = res as Methode[];
      console.log(this.method);
      console.log("rachedtest" + res);


    });


  }


}

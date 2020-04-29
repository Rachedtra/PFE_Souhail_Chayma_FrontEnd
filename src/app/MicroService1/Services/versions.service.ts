import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Versionss } from '../Models/Versionss.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VersionsService {
  Ver: Versionss[] = new Array();

  form: FormGroup = new FormGroup({
    idVersion: new FormControl(""),
    numero: new FormControl(""),
     versionLanguages: new FormControl(""),
     isActiveVersion :  new FormControl(""),
  });


  constructor(private _http: HttpClient) {}

    
  DeleteVer(id) {
    return this._http.delete('http://localhost:54735/api/Versionss/' + id,
      { responseType: "text" });
  }

  PostVer() {
    return this._http.post('http://localhost:54735/api/Versionss', this.form.value,
      { responseType: "text" });
  }


  PutVer() {
    return this._http.put('http://localhost:54735/api/Versionss', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:54735/api/Versionss').subscribe(res => {
      this.Ver = res as Versionss[];
      console.log(this.Ver);
      console.log("rachedtest" + res);


    });

  }





   }


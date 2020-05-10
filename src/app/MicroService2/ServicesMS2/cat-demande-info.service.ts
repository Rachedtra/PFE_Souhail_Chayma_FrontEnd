import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CatDemandeInfo } from '../ModelsMS2/CatDemandeInfo.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatDemandeInfoService {

  CatInfo: CatDemandeInfo[] = new Array();

  form: FormGroup = new FormGroup({
    idCatDemande: new FormControl(""),
    idCat: new FormControl(""),
    idDemandeInfo: new FormControl(""),
    isActiveCatInfo: new FormControl(""),
    labelCat: new FormControl(""),
    descriptionInfo: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteCatInfo(id) {
    return this._http.delete('http://localhost:58540/api/CatDemandeInfo/' + id,
      { responseType: "text" });
  }

  PostCatInfo() {
    return this._http.post('http://localhost:58540/api/CatDemandeInfo', this.form.value,
      { responseType: "text" });
  }


  PutCatInfo() {
    return this._http.put('http://localhost:58540/api/CatDemandeInfo', this.form.value,
      { responseType: "text" });
  }

  getCatInfo() {

    this._http.get('http://localhost:58540/api/CatDemandeInfo').subscribe(res => {
      this.CatInfo = res as CatDemandeInfo[];
      console.log(this.CatInfo);
      console.log("rachedtest" + res);


    });


  }
}

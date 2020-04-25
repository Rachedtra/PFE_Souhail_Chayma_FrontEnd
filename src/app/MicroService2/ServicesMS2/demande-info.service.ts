import { Injectable } from '@angular/core';
import { DemandeInformation } from '../ModelsMS2/demandeInfo.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeInfoService {

  info: DemandeInformation[] = new Array();

  form: FormGroup = new FormGroup({
    idDemandeInfo: new FormControl(""),
    description: new FormControl(""),
    date: new FormControl(""),
    commDemandeInfos : new FormControl(""),
    catDemandeInfos: new FormControl(""),
    
  });
  constructor(private _http:HttpClient) { }
  DeleteInfo(id) {
    return this._http.delete('http://localhost:58540/api/DemandeInformation/' + id,
      { responseType: "text" });
  }

  PostInfo() {
    return this._http.post('http://localhost:58540/api/DemandeInformation', this.form.value,
      { responseType: "text" });
  }


  PutInfo() {
    return this._http.put('http://localhost:58540/api/DemandeInformation', this.form.value,
      { responseType: "text" });
  }

  GetInfo() {

    this._http.get('http://localhost:58540/api/DemandeInformation').subscribe(res => {
      this.info = res as DemandeInformation[];
      console.log(this.info);
      console.log("rachedtest" + res);


    });
}

}

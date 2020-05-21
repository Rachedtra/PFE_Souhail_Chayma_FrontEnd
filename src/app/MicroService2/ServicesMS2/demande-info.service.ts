import { Injectable } from '@angular/core';
import { DemandeInformation } from '../ModelsMS2/demandeInfo.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { CatDemandeInfo } from '../ModelsMS2/CatDemandeInfo.models';

@Injectable({
  providedIn: 'root'
})
export class DemandeInfoService {

  info: DemandeInformation[] = new Array();
  infoActive: DemandeInformation[] = new Array();
id : string ; 
  form: FormGroup = new FormGroup({
    idDemandeInfo: new FormControl(""),
    description: new FormControl(""),
    date: new FormControl(new Date()),
    commDemandeInfos : new FormControl(""),
    catDemandeInfos: new FormControl(""),
    isActiveInfo: new FormControl(""),
    domaineNom :  new FormControl(""),
    titre : new FormControl(""),

    
  });
  obj: DemandeInformation[];
  filtirng: DemandeInformation[];
  constructor(private _http:HttpClient) { }
  DeleteInfo(id) {
    return this._http.delete('http://localhost:58540/api/DemandeInformation/' + id,
      { responseType: "text" });
  }

  PostInfo()  {
    return this._http.post('http://localhost:58540/api/DemandeInformation', this.form.value,
    { responseType: "text" } );
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
DemandeInfoActive() {

  this._http.get('http://localhost:58540/api/DemandeInformation/GetActiveListDemandeInfo').subscribe(res => {
    this.infoActive = res as DemandeInformation[];
    console.log(this.infoActive);
    console.log("rachedtest" + res);


  });
}


GetInfoFiltrer(id) {

  this._http.get('http://localhost:58540/api/DemandeInformation').subscribe(res => {
   this.info = res as DemandeInformation[];
  this.filtirng= this.info.filter(i=>i.domaineNom== id ) ; 
   console.log(this.info);
   console.log(this.filtirng);


 });
}





}








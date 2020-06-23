import { Injectable } from '@angular/core';
import { MS } from '../Models/MicroService.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MicroServiceService {
  micro: MS[] = new Array();
  microActive: MS[] = new Array();

  form: FormGroup = new FormGroup({
    idMs: new FormControl(""),
    label: new FormControl("",[Validators.required]),
    description: new FormControl(""),
    author: new FormControl(""),
    lien: new FormControl(""),
    diagClass: new FormControl(""),
    languagesFK: new FormControl(""),
    // msprojet: new FormControl(""),
    // methodes: new FormControl(""),
    // languages: new FormControl(""),
    isActiveMs :new FormControl(""),
    languageLabel : new FormControl(""),
    
  });
  MsFiltre: MS[];
ms : MS ; 
  idMicroService: string;
  NbMs: number;

  constructor(private _http: HttpClient) { }



  DeleteMs(id) {
    return this._http.delete('http://localhost:54735/api/MS/' + id,
      { responseType: "text" });
  }

  PostMs() {
    return this._http.post('http://localhost:54735/api/MS', this.form.value,
      { responseType: "text" });
  }


  PutMs() {
    return this._http.put('http://localhost:54735/api/MS', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:54735/api/MS').subscribe(res => {
      this.micro = res as MS[];
      console.log(this.micro);
      console.log("rachedtest" + res);


    });


  }

  ListActive(){
    this._http.get('http://localhost:54735/api/MS/GetActiveList').subscribe(res => {
      this.microActive =res as MS[];
      this.NbMs=this.microActive.length ;
      console.log(this.microActive) ; 

    }) ; 
  }


  GetMsFiltrer(id)
  {
      this._http.get('http://localhost:54735/api/MS/GetActiveList').subscribe(res => {
        this.microActive =res as MS[];
        this.MsFiltre= this.microActive.filter(o=>o.idMs==id) ; 
        this.idMicroService=this.MsFiltre[0].idMs ; 
        console.log(this.idMicroService) ;
        console.log(this.microActive) ; 
        console.log(this.MsFiltre) ; 
        
      }) ; 
    }

}

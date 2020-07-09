import { Injectable } from '@angular/core';
import { DemandeInformation } from '../ModelsMS2/demandeInfo.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { CatDemandeInfo } from '../ModelsMS2/CatDemandeInfo.models';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CatDemandeInfoService } from './cat-demande-info.service';

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
  demande: string;
  information: string;
  first: DemandeInformation[];
  NbQuestion: number;
 
  constructor(private _http:HttpClient,private notifInfo :ToastrService,
    private CatInfoService : CatDemandeInfoService
    )
   { }
  ResetInfo() {
    this.form.setValue({
      idDemandeInfo: "00000000-0000-0000-0000-000000000000",
      description: "",
      date: new Date(),
      commDemandeInfos: "",
      catDemandeInfos: "",
      isActiveInfo : true ,
      domaineNom : "",
      titre : "" ,
      idDomain:""

  });
}
  DeleteInfo(id) {
    return this._http.delete('http://localhost:58540/api/DemandeInformation/' + id,
      { responseType: "text" });
  }


  PostInfo()  {
   
    return this._http.post('http://localhost:58540/api/DemandeInformation', this.form.value,
    { responseType: "text" } )
  }


  PutInfo() {
    return this._http.put('http://localhost:58540/api/DemandeInformation', this.form.value,
      { responseType: "text" });
  }

  GetInfo() {

     this._http.get('http://localhost:58540/api/DemandeInformation').subscribe(res => {
      this.info = res as DemandeInformation[];
      console.log(this.info); 
      this.first=this.info.slice(0,10) ; 
      console.log(this.first) ; 
      console.log(this.first) ; 
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
  this.filtirng= this.info.filter(i=>i.idDomain== id ) ; 
  this.NbQuestion=this.filtirng.length ;
   console.log(this.info);
   this.information=this.filtirng[0].idDomain ;
   console.log(this.filtirng);


 });
}


Posted(id)
{
  return this._http.post('http://localhost:58540/api/DemandeInformation/Posted?idCat='+id,this.form.value,
   { responseType: "text" })
  .subscribe(
    res => {
      console.log(res);
      this.GetInfoFiltrer(this.information);
      this.notifInfo.info('', 'Demande Info Ajoute Avec Succés');
      this.ResetInfo();
    },
    err => {
      console.log(err);
      this.notifInfo.error('Demande Info Non Ajoute', 'Erreur');

    }
  )
}
 GetId(id){

   this._http.get('http://localhost:58540/api/DemandeInformation').subscribe(res => {
     this.info = res as DemandeInformation[];
     this.obj= this.info.filter(i=>i.idDemandeInfo==id ) ;
    this.demande=this.obj[0].idDemandeInfo ;  
     console.log(this.demande) ;
   
   });
 }
// getDemandeById(id){
//   this._http.get('http://localhost:58540/api/DemandeInformation/'+id)
//   .subscribe(res => {
//     this.demande=res as DemandeInformation;
//     console.log(this.demande) ; 
//   }); 
// }

}



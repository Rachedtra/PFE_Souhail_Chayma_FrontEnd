import { Injectable } from '@angular/core';
import { Commentaires } from '../ModelsMS2/commntaire.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommDemandeInfoService } from './comm-demande-info.service';
import { DemandeInfoService } from './demande-info.service';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  comm: Commentaires[] = new Array();
  commActive: Commentaires[] = new Array();

  form: FormGroup = new FormGroup({
    idComm: new FormControl(""),
    description: new FormControl(""),
    date: new FormControl(new Date()),
    // commDemandeInfos : new FormControl(""),
    // commVotes: new FormControl(""),
    isActiveComm : new FormControl(""),
    fkInfo: new FormControl(null),
    fkMs: new FormControl(null),
    labelMs  : new FormControl(""),
    descriptionInfo  : new FormControl(""),
    fkUser : new FormControl(""),
    firstName : new FormControl(""),
    lastName : new FormControl(""),
  });
  CommInfoFiltre: Commentaires[];
  nombre: number;
  commfilter: Commentaires[];
  id: string;
  commMs: any[];
  nNbComm: number;
  NbComm: number;
  constructor(private _http :HttpClient,
    private notifComm :ToastrService,
    private commInfoService : CommDemandeInfoService,
    private infoservice : DemandeInfoService,
    private MsService:MicroServiceService,
    private auth : AuthServiceService) { }

    ResetComm() {
      this.form.setValue({
        idComm: "00000000-0000-0000-0000-000000000000",
        description: "",
        date:  new Date(),
        fkInfo:"",
        // commVotes:"",
        // commDemandeInfos:"",
         fkMs:"",
        descriptionInfo : "",
        isActiveComm : true,
        labelMs:"",
        fkUser:"",
        firstName:"",
        lastName:"",

    });
  }
  DeleteCommentaires(id) {
    return this._http.delete('http://localhost:58540/api/Commentaires/' + id,
      { responseType: "text" });
  }

  PostCommentaires() {
    return this._http.post('http://localhost:58540/api/Commentaires', this.form.value,
      { responseType: "text" });
  }


  PutCommentaires() {
    return this._http.put('http://localhost:58540/api/Commentaires', this.form.value,
      { responseType: "text" });
  }

  GetCommentaires() {

    this._http.get('http://localhost:58540/api/Commentaires').subscribe(res => {
      this.comm = res as Commentaires[];
      console.log(this.comm);
      console.log("rachedtest" + res);


    });
}
CommentairesAcrive() {

  this._http.get('http://localhost:58540/api/Commentaires/GetActiveListComm').subscribe(res => {
    this.commActive = res as Commentaires[];
    console.log(this.commActive);
    console.log("rachedtest" + res);


  });
}
Posted()
{
  // http://localhost:58540/api/Commentaires/PostedComm?idDemande=68c77ca0-fab3-41cd-5584-08d803612820&idUser=f88c18a9-a700-4c05-30ea-78d80f2c5167

  return this._http.post('http://localhost:58540/api/Commentaires/PostedComm?idDemande='+
  this.infoservice.demande+'&idUser='+this.auth.iduser,this.form.value,
 )
  .subscribe(
    res => {
      console.log(res);
     this.getCommInfoFiltrer(this.infoservice.demande) ; 
      this.notifComm.info('', ' Commentaires Ajoute Avec Succés');
      this.ResetComm();
    },
    err => {
      console.log(err);
      this.notifComm.error(' Commentaires Non Ajoute', 'Erreur');

    }
  )
}

getCommMsFiltre(id) {

  this._http.get('http://localhost:58540/api/Commentaires').subscribe(res => {
    this.commMs = res as Commentaires[];
    this.commfilter= this.commMs.filter(i=>i.fkMs==id ) ; 
    this.NbComm = this.commfilter.length ;

    console.log(this.NbComm);
    console.log(this.commfilter);

  });
}
//idMicroService
PostCommentairesMs() {
  return this._http.post('http://localhost:58540/api/Commentaires/PostedCommMs?idMs='+
  this.MsService.idMicroService, this.form.value,
  { responseType: "text" } )
  .subscribe(
    res => {
      console.log(res);
     this.getCommMsFiltre(this.MsService.idMicroService) ; 
      this.notifComm.info('', ' Commentaires Ajoute Avec Succés');
      this.ResetComm();
    },
    err => {
      console.log(err);
      this.notifComm.error(' Commentaires Non Ajoute', 'Erreur');

    }
  )
}


getCommInfoFiltrer(id) {

  this._http.get('http://localhost:58540/api/Commentaires').subscribe(res => {
    this.comm = res as Commentaires[];
    this.CommInfoFiltre= this.comm.filter(i=>i.fkInfo==id ); 
   this.nombre= this.CommInfoFiltre.length ; 
   console.log( this.nombre);
    console.log(this.CommInfoFiltre);
  });

}
GetCommId(id){
  this._http.get('http://localhost:58540/api/Commentaires').subscribe(res => {
    this.comm = res as Commentaires[];
  this.commfilter= this.comm.filter(i=>i.idComm==id ); 
  this.id=this.commfilter[0].idComm ; 
  console.log(this.commfilter) ; 
  });
}
}

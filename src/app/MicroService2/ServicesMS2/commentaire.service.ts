import { Injectable } from '@angular/core';
import { Commentaires } from '../ModelsMS2/commntaire.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommDemandeInfoService } from './comm-demande-info.service';
import { DemandeInfoService } from './demande-info.service';

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
    commDemandeInfos : new FormControl(""),
    commVotes: new FormControl(""),
    isActiveComm : new FormControl(""),
    
  });
  constructor(private _http :HttpClient,
    private notifComm :ToastrService,
    private commInfoService : CommDemandeInfoService,
    private infoservice : DemandeInfoService) { }

    ResetComm() {
      this.form.setValue({
        idComm: "00000000-0000-0000-0000-000000000000",
        description: "",
        date:  new Date(),
        commDemandeInfos: "",
        commVotes: "",
        isActiveComm : true

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
Posted(id)
{
  return this._http.post('http://localhost:58540/api/Commentaires/PostedComm?idDemande='+id,this.form.value,
   { responseType: "text" })
  .subscribe(
    res => {
      console.log(res);
     this.commInfoService.getCommInfoFiltrer(this.infoservice.demande) ; 
      this.notifComm.info('', ' Commentaires Ajoute Avec Succés');
      this.ResetComm();
    },
    err => {
      console.log(err);
      this.notifComm.error(' Commentaires Non Ajoute', 'Erreur');

    }
  )
}


PostCommentairesMs() {
  return this._http.post('http://localhost:58540/api/Commentaires/PostedCommMs', this.form.value,
   );
}

}

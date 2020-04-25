import { Injectable } from '@angular/core';
import { Commentaires } from '../ModelsMS2/commntaire.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  comm: Commentaires[] = new Array();

  form: FormGroup = new FormGroup({
    idComm: new FormControl(""),
    description: new FormControl(""),
    date: new FormControl(""),
    commDemandeInfos : new FormControl(""),
    commVotes: new FormControl(""),
    
  });
  constructor(private _http :HttpClient) { }


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
}

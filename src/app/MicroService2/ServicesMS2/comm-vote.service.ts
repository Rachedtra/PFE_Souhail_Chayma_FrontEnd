import { Injectable } from '@angular/core';
import { CommVote } from '../ModelsMS2/CommVote.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommVoteService {

  CommVote: CommVote[] = new Array();
  CommVoteActive: CommVote[] = new Array();
  form: FormGroup = new FormGroup({
    idCommVote: new FormControl(""),
    idComm: new FormControl(""),
    idVote: new FormControl(""),
    isActiveCommVote: new FormControl(""),
    descriptionComm: new FormControl(""),
    note: new FormControl(""),
  });
  CommVoteFiltre: CommVote[];
  v: number;

  constructor(private _http: HttpClient) { }

  DeleteCommVote(id) {
    return this._http.delete('http://localhost:58540/api/CommVote/' + id,
      { responseType: "text" });
  }

  PostCommVote() {
    return this._http.post('http://localhost:58540/api/CommVote', this.form.value,
      { responseType: "text" });
  }


  PutCommVote() {
    return this._http.put('http://localhost:58540/api/CommVote', this.form.value,
      { responseType: "text" });
  }

  getCommVote() {

    this._http.get('http://localhost:58540/api/CommVote').subscribe(res => {
      this.CommVote = res as CommVote[];
      console.log(this.CommVote);
      console.log("rachedtest" + res);


    });


  }

  CommentaireVoteActive() {

    this._http.get('http://localhost:58540/api/CommVote/GetActiveListCommVote').subscribe(res => {
      this.CommVoteActive = res as CommVote[];
      console.log(this.CommVoteActive);
      console.log("rachedtest" + res);


    });


  }

  getCommVoteFiltrer(id) {

    this._http.get('http://localhost:58540/api/CommVote').subscribe(res => {
      this.CommVote = res as CommVote[];
      this.CommVoteFiltre= this.CommVote.filter(i=>i.idComm==id ); 
     this.v=this.CommVoteFiltre[0].note ; 
      console.log(this.CommVoteFiltre);
    });
  
  }
}

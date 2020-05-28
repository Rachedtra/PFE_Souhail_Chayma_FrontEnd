import { Injectable } from '@angular/core';
import { Vote } from '../ModelsMS2/vote.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  vot: Vote[] = new Array();
  votActive: Vote[] = new Array();

  form: FormGroup = new FormGroup({
    idVote: new FormControl(""),
    note: new FormControl(""),
    commVotes: new FormControl(""),
    isActiveVote: new FormControl(""),
    
  });

  constructor(private _http: HttpClient) { }



  DeleteVote(id) {
    return this._http.delete('http://localhost:58540/api/Vote/' + id,
      { responseType: "text" });
  }

  PostVote() {
    return this._http.post('http://localhost:58540/api/Vote', this.form.value,
      { responseType: "text" });
  }


  PutVote() {
    return this._http.put('http://localhost:58540/api/Vote', this.form.value,
      { responseType: "text" });
  }

  GetVote() {

    this._http.get('http://localhost:58540/api/Vote').subscribe(res => {
      this.vot = res as Vote[];
      console.log(this.vot);
      console.log("rachedtest" + res);


    });
}

VoteActive() {

  this._http.get('http://localhost:58540/api/Vote/GetActiveListVote').subscribe(res => {
    this.votActive = res as Vote[];
    console.log(this.votActive);
    console.log("rachedtest" + res);


  });
}
}

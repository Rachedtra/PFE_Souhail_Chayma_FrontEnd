import { Injectable } from '@angular/core';
import { Vote } from '../ModelsMS2/vote.models';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommVoteService } from './comm-vote.service';

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
  voteid: Vote[];
  idV: string;
  notte: number;

  constructor(private _http: HttpClient,private CommVoteService:CommVoteService) { }



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
getidvote(rating,id){
  this._http.get('http://localhost:58540/api/Vote').subscribe(res => {
    this.vot = res as Vote[];
    this.voteid= this.vot.filter(i=>i.note==rating );
    this.idV=this.voteid[0].idVote ; 
    this.notte=this.voteid[0].note ;
    console.log(this.idV)
    this.CommVoteService.form.setValue({
      idCommVote: "00000000-0000-0000-0000-000000000000",
      idComm: id ,
      idVote:this.idV,
      isActiveCommVote: true,
      descriptionComm: "",
      note:"" ,
  }); 
  this.CommVoteService.PostCommVote().subscribe(
    res => {
      console.log(res);
      this.CommVoteService.getCommVoteFiltrer(id) ;
      
     ;
    },
    err => {
      console.log(err);
   
  
    }
  )
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../Models2/Vote.models2';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  Vo: Vote[] = new Array();

  form: FormGroup = new FormGroup({
    idVote: new FormControl(""),
    note: new FormControl(""),
    commVotes: new FormControl(""),
  });

  constructor(private _http: HttpClient) { }

  DeleteVo(id) {
    return this._http.delete('http://localhost:58540/api/Vote/' + id,
      { responseType: "text" });
  }

  PostVo() {
    return this._http.post('http://localhost:58540/api/Vote', this.form.value,
      { responseType: "text" });
  }

  PutVo() {
    return this._http.put('http://localhost:58540/api/Vote', this.form.value,
      { responseType: "text" });
  }

  refreshList() {

    this._http.get('http://localhost:58540/api/Vote').subscribe(res => {
      this.Vo = res as Vote[];
      console.log(this.Vo);
      console.log("rachedtest" + res);


    });

  }

}

import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommMs } from '../Models/CommMs.models';

@Injectable({
  providedIn: 'root'
})
export class CommMsService {
  form: FormGroup = new FormGroup({
    idCommMs: new FormControl(""),
    idMs: new FormControl(""),
    idComm: new FormControl(""),
    labelMs: new FormControl(""),
    isActiveCommMs: new FormControl(""),
    
  });
  commMs: CommMs[];
  constructor(private _http: HttpClient) { }


  DeleteCommMs(id) {
    return this._http.delete('http://localhost:54735/api/CommMs/' + id,
      { responseType: "text" });
  }

  PostCommMs() {
    return this._http.post('http://localhost:54735/api/CommMs', this.form.value,
      { responseType: "text" });
  }


  PutCommMs() {
    return this._http.put('http://localhost:54735/api/CommMs', this.form.value,
      { responseType: "text" });
  }

  getCommMs() {

    this._http.get('http://localhost:54735/api/CommMs').subscribe(res => {
      this.commMs = res as CommMs[];
      console.log(this.commMs);

    });
  }
}

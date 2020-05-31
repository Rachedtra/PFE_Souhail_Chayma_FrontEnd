import { Injectable } from '@angular/core';
import { CommDemandeInfo } from '../ModelsMS2/CommDemandeInfo.models';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommDemandeInfoService {

  CommInfo: CommDemandeInfo[] = new Array();
  CommInfoActive: CommDemandeInfo[] = new Array();

  form: FormGroup = new FormGroup({
    idCommInfo: new FormControl(""),
    idComm: new FormControl(""),
    idDemandeInfo: new FormControl(""),
    isActiveCommInfo: new FormControl(""),
    descriptionComm: new FormControl(""),
    descriptionInfo: new FormControl(""),
    titreInfo :new FormControl(""),
  });
 
  CommInfoFiltre: CommDemandeInfo[];
  comm: CommDemandeInfo[];
  id: string;
  constructor(private _http: HttpClient) { }

  DeleteCommInfo(id) {
    return this._http.delete('http://localhost:58540/api/CommDemandeInfo/' + id,
      { responseType: "text" });
  }

  PostCommInfo() {
    return this._http.post('http://localhost:58540/api/CommDemandeInfo', this.form.value,
      { responseType: "text" });
  }


  
  PutCommInfo() {
    return this._http.put('http://localhost:58540/api/CommDemandeInfo', this.form.value,
      { responseType: "text" });
  }

  getCommInfo() {

    this._http.get('http://localhost:58540/api/CommDemandeInfo').subscribe(res => {
      this.CommInfo = res as CommDemandeInfo[];
      console.log(this.CommInfo);
      console.log("rachedtest" + res);


    });
  }
  CommentairesInfoActive() {

    this._http.get('http://localhost:58540/api/CommDemandeInfo/GetActiveListCommInfo').subscribe(res => {
      this.CommInfoActive = res as CommDemandeInfo[];
      console.log(this.CommInfoActive);
      console.log("rachedtest" + res);


    });

  }
  getCommInfoFiltrer(id) {

    this._http.get('http://localhost:58540/api/CommDemandeInfo').subscribe(res => {
      this.comm = res as CommDemandeInfo[];
      this.CommInfoFiltre= this.comm.filter(i=>i.idDemandeInfo==id ); 
      this.id=this.CommInfoFiltre[0].idDemandeInfo ; 
      console.log(this.CommInfoFiltre);
    });
  
  }
}

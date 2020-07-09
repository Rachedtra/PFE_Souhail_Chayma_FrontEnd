import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { HttpClient } from '@angular/common/http';
import { DemandeInformation } from 'src/app/MicroService2/ModelsMS2/demandeInfo.models';
import { CommDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CommDemandeInfo.models';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { CatDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CatDemandeInfo.models';
import { CommVoteService } from 'src/app/MicroService2/ServicesMS2/comm-vote.service';
import { VoteService } from 'src/app/MicroService2/ServicesMS2/vote.service';
import { Location } from '@angular/common';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';

@Component({
  selector: 'app-get-id-info',
  templateUrl: './get-id-info.component.html',
  styleUrls: ['./get-id-info.component.css']
})
export class GetIdInfoComponent implements OnInit {
  modalRef:BsModalRef
 
  obj:DemandeInformation[];
  Info: DemandeInformation[];
note : number ; 
  comm : CommDemandeInfo[] ; 
  CommInfoFiltre :  CommDemandeInfo[] ; 
  CatInfo: any[];
  CatInfoFiltrer: CommDemandeInfo[];
InformationFiltre: any = { titre: '' };
  constructor(private modalService: BsModalService,
    private InfoService: DemandeInfoService,
    private _http : HttpClient,
    private commService : CommentaireService,
    private CommVoteService : CommVoteService,
    private comminfoService: CommDemandeInfoService,
    private VoteService : VoteService,
    private location: Location
   
    ) { }
   
  ngOnInit() {
this.InfoService.GetInfoFiltrer;
this.InfoService.GetId ; 
this.CommVoteService.getCommVoteFiltrer ; 
this.resetFormCommVote();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}

resetFormCommVote() {
  this.CommVoteService.form.setValue({
    idCommVote: "00000000-0000-0000-0000-000000000000",
    idComm: "",
    idVote: "",
    isActiveCommVote: true,
    descriptionComm: "",
    note: "",
}); 


}

getCatInfoFiltrer(id) {

  this._http.get('http://localhost:58540/api/CatDemandeInfo').subscribe(res => {
    this.CatInfo = res as CatDemandeInfo[];
    this.CatInfoFiltrer= this.CatInfo.filter(i=>i.idDemandeInfo==id ) ;
    console.log(this.CatInfo);
    console.log("rachedtest" + res);


  });
}
rate(rating)
{console.log(rating);
  }
 
Post(id){
  this.CommVoteService.form.setValue({
    idCommVote: "00000000-0000-0000-0000-000000000000",
    idComm: id ,
    idVote:this.VoteService.idV,
    isActiveCommVote: true,
    descriptionComm: "",
    note:"" ,
}); 
this.CommVoteService.PostCommVote().subscribe(
  res => {
    console.log(res);
    this.CommVoteService.getCommVoteFiltrer(id) ;
    
   ;
    this.resetFormCommVote();
  },
  err => {
    console.log(err);
 

  }
)
}

cancel() {
  this.location.back(); // <-- go back to previous location on cancel
}

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';

import { DemandeInformation } from 'src/app/MicroService2/ModelsMS2/demandeInfo.models';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/MicroService2/ModelsMS2/categorie.models';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { CommDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CommDemandeInfo.models';
import { CatDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CatDemandeInfo.models';
import { CommVoteService } from 'src/app/MicroService2/ServicesMS2/comm-vote.service';
import { VoteService } from 'src/app/MicroService2/ServicesMS2/vote.service';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';

@Component({
  selector: 'app-interface-list',
  templateUrl: './interface-list.component.html',
  styleUrls: ['./interface-list.component.css']
})
export class InterfaceListComponent implements OnInit {
  modalRef:BsModalRef

  Info: DemandeInformation[] = new Array();
  filtirng: DemandeInformation[] = new Array();
  obj: Object;
  id : any
  CatInfo: CatDemandeInfo[];
  CatInfoFiltrer: CatDemandeInfo[];
  constructor(private _http :HttpClient,
    private modalService: BsModalService,
    private InfoService :DemandeInfoService,
    private domService : DomaineService , 
    private CommService : CommentaireService,
    private CommVoteService : CommVoteService,
    private comminfoService: CommDemandeInfoService,
    private VoteService : VoteService
) {}
  ngOnInit() {
    this.InfoService.GetInfo() ; 
    this.domService.refreshList() ; 
    this.domService.DomaineActive() ;
   this.InfoService.GetInfoFiltrer ;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
getCatInfoFiltrer(id) {

  this._http.get('http://localhost:58540/api/CatDemandeInfo').subscribe(res => {
    this.CatInfo = res as CatDemandeInfo[];
    this.CatInfoFiltrer= this.CatInfo.filter(i=>i.idDemandeInfo==id ) ;
    console.log(this.CatInfo);
    console.log("rachedtest" + res);


  });
}
}

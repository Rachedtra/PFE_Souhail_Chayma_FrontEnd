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
  constructor(private _http :HttpClient,
    private modalService: BsModalService,
    private InfoService :DemandeInfoService,
    private domService : DomaineService , 
) {}
  ngOnInit() {
    this.InfoService.GetInfo() ; 
    this.domService.refreshList() ; 
   this.InfoService.GetInfoFiltrer ;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}
}

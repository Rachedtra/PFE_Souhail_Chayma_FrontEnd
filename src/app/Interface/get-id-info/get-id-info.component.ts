import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { HttpClient } from '@angular/common/http';
import { DemandeInformation } from 'src/app/MicroService2/ModelsMS2/demandeInfo.models';
import { CommDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CommDemandeInfo.models';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { CatDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CatDemandeInfo.models';

@Component({
  selector: 'app-get-id-info',
  templateUrl: './get-id-info.component.html',
  styleUrls: ['./get-id-info.component.css']
})
export class GetIdInfoComponent implements OnInit {
  modalRef:BsModalRef
  obj:DemandeInformation[];
  Info: DemandeInformation[];
  id : any ; 
  comm : CommDemandeInfo[] ; 
  CommInfoFiltre :  CommDemandeInfo[] ; 
  CatInfo: any[];
  CatInfoFiltrer: CommDemandeInfo[];
InformationFiltre: any = { titre: '' };
  constructor(private modalService: BsModalService,
    private InfoService: DemandeInfoService,
    private _http : HttpClient,

    private comminfoService: CommDemandeInfoService
   
    ) { }
   
  ngOnInit() {
this.InfoService.GetInfoFiltrer;
this.InfoService.GetId ; 
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
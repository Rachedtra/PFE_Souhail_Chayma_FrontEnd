import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { Commentaires } from 'src/app/MicroService2/ModelsMS2/commntaire.models';
import { CommDemandeInfo } from 'src/app/MicroService2/ModelsMS2/CommDemandeInfo.models';
import { DemandeInformation } from 'src/app/MicroService2/ModelsMS2/demandeInfo.models';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent implements OnInit {

  constructor(   private notifInfo: ToastrService,
    private CommService : CommentaireService ,
    private CommInfoService : CommDemandeInfoService,
    private infoService:DemandeInfoService) { }
 
  ngOnInit() {
    this.CommInfoService.getCommInfoFiltrer ; 
    this.ResetComm() ; 

    this.resetFormCommInfo() ; 
  } 
  ResetComm() {
    this.CommService.form.setValue({
      idComm: "00000000-0000-0000-0000-000000000000",
      description: "",
      date: new Date(),
      commDemandeInfos: "",
      commVotes: "",
      isActiveComm : true

  });
}
resetFormCommInfo() {
  this.CommInfoService.form.setValue({
    idCommInfo: "00000000-0000-0000-0000-000000000000",
    idComm: "",
    idDemandeInfo: "",
    isActiveCommInfo: true,
    descriptionComm: "",
    descriptionInfo: "",
    titreInfo : "",
    dateComm : ""
}); 
}
onSubmitComm ()
{
  if (this.CommService.form.controls.idComm.value == "00000000-0000-0000-0000-000000000000"&&
    this.CommInfoService.form.controls.idCommInfo.value== "00000000-0000-0000-0000-000000000000")
  this.CommService.Posted(this.infoService.demande);
}

}

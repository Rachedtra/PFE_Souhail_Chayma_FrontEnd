import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { CommDemandeInfoComponent } from '../comm-demande-info.component';

@Component({
  selector: 'app-list-comm-demande-info',
  templateUrl: './list-comm-demande-info.component.html',
  styleUrls: ['./list-comm-demande-info.component.css']
})
export class ListCommDemandeInfoComponent implements OnInit {

  CommInfoFilter: any = { descriptionComm: '' };



  constructor(private CommInfoService: CommDemandeInfoService,
    private modalCommInfo: BsModalService,
    private CommInfoInfo: ToastrService,
    private CommService:CommentaireService,
    private InfoetServie : DemandeInfoService
  
    ) { }
    modalRefCommInfo: BsModalRef;

  ngOnInit() {
    this.CommInfoService.getCommInfo();
    this.CommService.GetCommentaires() ; 
     this.InfoetServie.GetInfo() ; 
    this.resetFormCommInfo();
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

DeleteCi(idCommInfo: string) {
  this.CommInfoService.DeleteCommInfo(idCommInfo).subscribe(res => {
    console.log(res);
    this.CommInfoService.getCommInfo();
  })

}

openModalCi(templatee: TemplateRef<CommDemandeInfoComponent>) {
  this.modalRefCommInfo = this.modalCommInfo.show(templatee);


}

ConfirmModalCi(template: TemplateRef<CommDemandeInfoComponent>) {
  this.modalRefCommInfo = this.modalCommInfo.show(template, { class: 'modal-sm' });
}

confirmCi(): void {

  this.modalRefCommInfo.hide();
  this.CommInfoInfo.success('', 'Commentaire Demande Information Supprimee Avec Succés');
}

declineCi(): void {

  this.modalRefCommInfo.hide();
  this.CommInfoInfo.warning('', 'Commentaire Demande Information Non Supprimee');
}

EditCi(ci) {
  this.CommInfoService.form.setValue(ci);
  this.modalRefCommInfo = this.modalCommInfo.show(CommDemandeInfoComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });


}
AddCi() {
  this.resetFormCommInfo();
  this.modalRefCommInfo = this.modalCommInfo.show(CommDemandeInfoComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });

}


}

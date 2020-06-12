import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommDemandeInfoComponent } from '../comm-demande-info.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/comm-demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';

@Component({
  selector: 'app-list-comm-demande-infoe-active',
  templateUrl: './list-comm-demande-infoe-active.component.html',
  styleUrls: ['./list-comm-demande-infoe-active.component.css']
})
export class ListCommDemandeInfoeActiveComponent implements OnInit {

  modalRefCommInfo: BsModalRef;
  CommInfoFilterActive: any = { descriptionInfo: '' };



  constructor(private CommInfoService: CommDemandeInfoService,
    private modalCommInfo: BsModalService,
    private CommInfoInfo: ToastrService,
    private CommService:CommentaireService,
    private InfoetServie : DemandeInfoService
  
    ) { }

  ngOnInit() {
    this.CommInfoService.getCommInfo();
    this.CommInfoService.CommentairesInfoActive();
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
  }); 
}

DeleteCi(idCommInfo: string) {
  this.CommInfoService.DeleteCommInfo(idCommInfo).subscribe(res => {
    console.log(res);
    this.CommInfoService.CommentairesInfoActive();
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

EditCi(ci,  templatee: TemplateRef<CommDemandeInfoComponent>) {
  this.CommInfoService.form.setValue(ci);
  this.modalRefCommInfo = this.modalCommInfo.show(templatee);


}
AddCi(templatee: TemplateRef<CommDemandeInfoComponent>) {
  this.resetFormCommInfo();
  this.modalRefCommInfo = this.modalCommInfo.show(templatee);

}


}

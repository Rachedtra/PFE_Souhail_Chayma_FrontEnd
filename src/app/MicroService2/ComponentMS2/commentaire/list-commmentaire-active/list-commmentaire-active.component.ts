import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommentaireComponent } from 'src/app/MicroService2/ComponentMS2/commentaire/commentaire.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-commmentaire-active',
  templateUrl: './list-commmentaire-active.component.html',
  styleUrls: ['./list-commmentaire-active.component.css']
})
export class ListCommmentaireActiveComponent implements OnInit {

  modalCommRef: BsModalRef;
  CommFilterActive: any = { description: '' };
  constructor( private CommService: CommentaireService,
    private notifComm: ToastrService,
    private modalComm: BsModalService,
  
    
    ) { }


    ngOnInit() {
      this.CommService.CommentairesAcrive();
   
      this.CommService.GetCommentaires();
      this.ResetComm();
    }
    ResetComm() {
      this.CommService.form.setValue({
          idComm: "00000000-0000-0000-0000-000000000000",
          description: "",
          date:  new Date(),
          fkInfo:"",
          // commVotes:"",
          // commDemandeInfos:"",
           fkMs:"",
          descriptionInfo : "",
          isActiveComm : true,
          labelMs:"",
          fkUser:"",
          firstName:"",
          lastName:"",
  

    });
  }



  DeleteComm(id: string) {
    this.CommService.DeleteCommentaires(id).subscribe(res => {
      console.log(res);
      this.CommService.CommentairesAcrive();
      this.CommService.GetCommentaires();
    })
  
  }
  
  openComm(templatee: TemplateRef<CommentaireComponent>) {
    this.modalCommRef = this.modalComm.show(templatee);
  
  
  }
  
  ConfirmCommModal(template: TemplateRef<CommentaireComponent>) {
    this.modalCommRef = this.modalComm.show(template, { class: 'modal-sm' });
  }
  
  confirmComm(): void {
  
    this.modalCommRef.hide();
    this.notifComm.success('', 'Commentaire Supprimee Avec Succés');
  }
  
  declineComm(): void {
  
    this.modalCommRef.hide();
    this.notifComm.warning('', 'Commentaire Non Supprimee');
  }
  
  EditComm(comm) {
    this.CommService.form.setValue(comm);
    this.modalCommRef = this.modalComm.show(CommentaireComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  
  
  }
  AddComm() {
    this.ResetComm();
    this.modalCommRef = this.modalComm.show(CommentaireComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });;
  
  }
}

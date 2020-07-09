import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { CommentaireComponent } from '../commentaire.component';

@Component({
  selector: 'app-list-commentaire',
  templateUrl: './list-commentaire.component.html',
  styleUrls: ['./list-commentaire.component.css']
})
export class ListCommentaireComponent implements OnInit {

  modalCommRef: BsModalRef;
  CommFilter: any = { description: '' };
  constructor( private CommService: CommentaireService,
    private notifComm: ToastrService,
    private modalComm: BsModalService,
    
    ) { }


    ngOnInit() {
      this.CommService.GetCommentaires();
      this.ResetComm();
    }
    ResetComm() {
      this.CommService.form.setValue({
        idComm: "00000000-0000-0000-0000-000000000000",
        description: "",
        date:  new Date(),
        fkInfo:"",
        commVotes:"",
        commDemandeInfos:"",
        fkMs:"",
        descriptionInfo : "",
        isActiveComm : true

    });
  }


  DeleteComm(id: string) {
    this.CommService.DeleteCommentaires(id).subscribe(res => {
      console.log(res);
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
  
  EditComm(comm,  templatee: TemplateRef<CommentaireComponent>) {
    this.CommService.form.setValue(comm);
    this.modalCommRef = this.modalComm.show(templatee);
  
  
  }
  AddComm(templatee: TemplateRef<CommentaireComponent>) {
    this.ResetComm();
    this.modalCommRef = this.modalComm.show(templatee);
  
  }

}

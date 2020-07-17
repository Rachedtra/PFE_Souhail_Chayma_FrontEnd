import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommVoteComponent } from '../comm-vote.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { VoteService } from 'src/app/MicroService2/ServicesMS2/vote.service';
import { CommVoteService } from 'src/app/MicroService2/ServicesMS2/comm-vote.service';
@Component({
  selector: 'app-list-comm-vote-active',
  templateUrl: './list-comm-vote-active.component.html',
  styleUrls: ['./list-comm-vote-active.component.css']
})
export class ListCommVoteActiveComponent implements OnInit {

  modalRefCommVote: BsModalRef;
  CommVoteFilterActive: any = { descriptionComm: '' };



  constructor(private CommVoteService: CommVoteService,
    private modalCommVote: BsModalService,
    private CommVoteInfo: ToastrService,
    private CommService:CommentaireService,
    private VoteServie : VoteService
  
    ) { }

  ngOnInit() {
    this.CommVoteService.getCommVote();
    this.CommVoteService.CommentaireVoteActive();
    this.CommService.GetCommentaires() ; 
     this.VoteServie.GetVote() ; 
    this.resetFormCommVote();
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

DeleteCv(idCommVote: string) {
  this.CommVoteService.DeleteCommVote(idCommVote).subscribe(res => {
    console.log(res);
    this.CommVoteService.CommentaireVoteActive();
    this.CommVoteService.getCommVote();
  })

}

openModalCv(templatee: TemplateRef<CommVoteComponent>) {
  this.modalRefCommVote = this.modalCommVote.show(templatee);


}

ConfirmModalCv(template: TemplateRef<CommVoteComponent>) {
  this.modalRefCommVote = this.modalCommVote.show(template, { class: 'modal-sm' });
}

confirmCv(): void {

  this.modalRefCommVote.hide();
  this.CommVoteInfo.success('', 'Commentaire  Vote Supprimee Avec Succés');
}

declineCv(): void {

  this.modalRefCommVote.hide();
  this.CommVoteInfo.warning('', 'Commentaire Vote Non Supprimee');
}

EditCv(cv,  templatee: TemplateRef<CommVoteComponent>) {
  this.CommVoteService.form.setValue(cv);
  this.modalRefCommVote = this.modalCommVote.show(templatee);


}
AddCv(templatee: TemplateRef<CommVoteComponent>) {
  this.resetFormCommVote();
  this.modalRefCommVote = this.modalCommVote.show(templatee);

}


}

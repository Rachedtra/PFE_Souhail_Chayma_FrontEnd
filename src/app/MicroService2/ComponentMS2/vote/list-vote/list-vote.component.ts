import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { VoteService } from 'src/app/MicroService2/ServicesMS2/vote.service';
import { VoteComponent } from '../vote.component';

@Component({
  selector: 'app-list-vote',
  templateUrl: './list-vote.component.html',
  styleUrls: ['./list-vote.component.css']
})
export class ListVoteComponent implements OnInit {

  modalVoteRef: BsModalRef;

  constructor( private voteService: VoteService,
    private notifVote: ToastrService,
    private modalVote: BsModalService,
    
    ) { }

    ngOnInit() {
      this.voteService.GetVote();
      this.ResetVote();
    }
    ResetVote() {
      this.voteService.form.setValue({
        idVote: "00000000-0000-0000-0000-000000000000",
        note: "",
        commVotes: "",
        isActiveVote : true 
    });
  }


  DeleteVote(id: string) {
    this.voteService.DeleteVote(id).subscribe(res => {
      console.log(res);
      this.voteService.GetVote();
    })
  
  }
  
  openVote(templatee: TemplateRef<VoteComponent>) {
    this.modalVoteRef = this.modalVote.show(templatee);
  
  
  }
  
  ConfirmVoteModal(template: TemplateRef<VoteComponent>) {
    this.modalVoteRef = this.modalVote.show(template, { class: 'modal-sm' });
  }
  
  confirmVote(): void {
  
    this.modalVoteRef.hide();
    this.notifVote.success('', 'Vote Supprimee Avec Succés');
  }
  
  declineVote(): void {
  
    this.modalVoteRef.hide();
    this.notifVote.warning('', 'Vote Non Supprimee');
  }
  
  EditVote(vt,  templatee: TemplateRef<VoteComponent>) {
    this.voteService.form.setValue(vt);
    this.modalVoteRef = this.modalVote.show(templatee);
  
  
  }
  AddVote(templatee: TemplateRef<VoteComponent>) {
    this.ResetVote();
    this.modalVoteRef = this.modalVote.show(templatee);
  
  }

}

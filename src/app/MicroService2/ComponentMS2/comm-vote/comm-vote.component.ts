import { Component, OnInit } from '@angular/core';
import { CommVoteService } from 'src/app/MicroService2/ServicesMS2/comm-vote.service';
import { CommentaireService } from '../../ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
import { VoteService } from '../../ServicesMS2/vote.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-comm-vote',
  templateUrl: './comm-vote.component.html',
  styleUrls: ['./comm-vote.component.css']
})
export class CommVoteComponent implements OnInit {

  constructor(private CommVoteService: CommVoteService,
    private CommVoteInfo: ToastrService,
    private CommService:CommentaireService,
    private VoteServie : VoteService,
    public modalRefCommVote:BsModalRef
  
    ) { }

  ngOnInit() {
    this.CommService.GetCommentaires() ; 
     this.VoteServie.GetVote() ; 
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
onSubmitCv ()
{
  if (this.CommVoteService.form.controls.idCommVote.value == "00000000-0000-0000-0000-000000000000")
  this.insertCv();
else
  this.UpdateCv();
}
UpdateCv() {
    this.CommVoteService.PutCommVote().subscribe(
      res => {
        console.log(res);
        this.CommVoteService.CommentaireVoteActive();
        this.CommVoteService.getCommVote();
        this.modalRefCommVote.hide() ;
        this.CommVoteInfo.info('', 'Commentaire  Vote  Modifiee Avec Succés');
        this.resetFormCommVote();
      },
      err => {
        console.log(err);
        this.CommVoteInfo.error('Commentaire  Vote Non Modifiee', 'Erreur');

      }
    )
  }


  insertCv() {
    this.CommVoteService.PostCommVote().subscribe(
      res => {
        console.log(res);
        this.CommVoteService.CommentaireVoteActive();
        this.CommVoteService.getCommVote();
        this.modalRefCommVote.hide() ;

        this.CommVoteInfo.success('', 'Commenatire Demande Information  Ajoutee Avec Succés');
        this.resetFormCommVote();
      },
      err => {
        console.log(err);
        this.CommVoteInfo.error('Categorie Demande Information  Non Ajoute', 'Erreur');

      }
    )
  }

}

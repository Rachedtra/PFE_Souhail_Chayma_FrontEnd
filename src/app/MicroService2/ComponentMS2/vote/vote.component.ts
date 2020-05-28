import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../ServicesMS2/vote.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private voteService: VoteService,
    private notifVote: ToastrService,) { }

  ngOnInit() {
  }

  ResetVote() {
    this.voteService.form.setValue({
      idVote: "00000000-0000-0000-0000-000000000000",
      note: "",
      commVotes: "",
      isActiveVote : true 

  });
}


onSubmitVote ()
{
  if (this.voteService.form.controls.idVote.value == "00000000-0000-0000-0000-000000000000")
  this.insertVote();
else
  this.UpdateVote();
}
UpdateVote() {
    this.voteService.PutVote().subscribe(
      res => {
        console.log(res);
        this.voteService.GetVote();
        this.notifVote.info('', 'Vote Modifiee Avec Succés');
        this.ResetVote();
      },
      err => {
        console.log(err);
        this.notifVote.error('Categorie Non Modifiee', 'Erreur');

      }
    )
  }


  insertVote() {
    this.voteService.PostVote().subscribe(
      res => {
        console.log(res);
        this.voteService.GetVote();
        this.notifVote.success('', 'vote Ajoutee Avec Succés');
        this.ResetVote();
      },
      err => {
        console.log(err);
        this.notifVote.error('Vote Non Ajoute', 'Erreur');

      }
    )
  }

  
}

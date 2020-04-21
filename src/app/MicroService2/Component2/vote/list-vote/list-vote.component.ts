import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/MicroService2/Services2/vote.service';
import { Vote } from 'src/app/MicroService2/Models2/Vote.Models2';

@Component({
  selector: 'app-list-vote',
  templateUrl: './list-vote.component.html',
  styleUrls: ['./list-vote.component.css']
})
export class ListVoteComponent implements OnInit {
  Vo: Vote[] = new Array();

  constructor(private Voservice: VoteService) { }

  ngOnInit() {

    this.Voservice.refreshList();
    this.resetForm();
  }

  resetForm() {
    this.Voservice.form.setValue({
      idVote: "00000000-0000-0000-0000-000000000000",
      note: "",
      commVotes: "",

    });
  }

  DeleteVo(idVote: string) {
    this.Voservice.DeleteVo(idVote).subscribe(res => {
      console.log(res);
      this.Voservice.refreshList();
    })

  }

  EditVo(Vote) {
    this.Voservice.form.setValue(Vote);

  }

}

import { Vote } from './../../Models2/Vote.Models2';
import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../Services2/vote.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  Vo: Vote[] = new Array();

  constructor(private formBuilder: FormBuilder, private Voservice: VoteService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {

    this.Voservice.form.setValue({
      idVote: "00000000-0000-0000-0000-000000000000",
      note: "",
      commVotes: "",

    });
  }

  onSubmit() {

    if (this.Voservice.form.controls.idVote.value == "00000000-0000-0000-0000-000000000000")
      this.insertRecord();
    else
      this.UpdateRecord();

  }

  insertRecord() {
    this.Voservice.PostVo().subscribe(
      res => {
        console.log(res);
        this.Voservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

  UpdateRecord() {
    this.Voservice.PutVo().subscribe(
      res => {
        console.log(res);
        this.Voservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }


}

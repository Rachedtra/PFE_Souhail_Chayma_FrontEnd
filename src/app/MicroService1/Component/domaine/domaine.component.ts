
import { Domaine } from './../../Models/Domaine.models';
import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../../Services/domaine.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {
  Dom: Domaine[] = new Array();

  constructor( private Domservice: DomaineService) { }

  ngOnInit() {

    this.resetForm();
  }
  resetForm() {

    this.Domservice.form.setValue({
      idDomaine: "00000000-0000-0000-0000-000000000000",
      nom: "",
      domainProjets:"",
       
    });
  }
  onSubmit() {

    if (this.Domservice.form.controls.idDomaine.value == "00000000-0000-0000-0000-000000000000")
      this.insertRecord();
    else
      this.UpdateRecord();

  }

  insertRecord() {
    this.Domservice.PostDom().subscribe(
      res => {      
        console.log(res);
        this.Domservice.refreshList(); 
       this.resetForm() ; 
      },
      err => {
        console.log(err);
      }
    )
  }

  UpdateRecord() {
    this.Domservice.PutDom().subscribe(
      res => {
       
        console.log(res);
        this.Domservice.refreshList(); 
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

}

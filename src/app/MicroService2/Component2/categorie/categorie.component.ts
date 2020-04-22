import { Categorie } from './../../Models2/Categorie.Models2';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../Services2/categorie.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  Cat: Categorie[] = new Array();

  constructor(private formBuilder: FormBuilder, private Catservice: CategorieService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {

    this.Catservice.form.setValue({
      idCat: "00000000-0000-0000-0000-000000000000",
      label: "",
      catDemandeInfos: "",
      sousCategories:"",

    });
  }

  onSubmit() {

    if (this.Catservice.form.controls.idCat.value == "00000000-0000-0000-0000-000000000000")
      this.insertCat();
    else
      this.UpdateCat();

  }

  insertCat() {
    this.Catservice.PostCat().subscribe(
      res => {
        console.log(res);
        this.Catservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

  UpdateCat() {
    this.Catservice.PutCat().subscribe(
      res => {
        console.log(res);
        this.Catservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

}



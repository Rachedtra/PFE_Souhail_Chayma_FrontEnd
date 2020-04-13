
import { Versionss } from './../../Models/Versionss.models';
import { Component, OnInit } from '@angular/core';
import { VersionsService } from '../../Services/versions.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {
 
  Ver: Versionss[] = new Array();

  constructor(private formBuilder: FormBuilder, private Verservice: VersionsService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {

    this.Verservice.form.setValue({
      idVersion: "00000000-0000-0000-0000-000000000000",
      numero: "",
      VersionLanguages: "",

    });
  }

  onSubmit() {

    if (this.Verservice.form.controls.idVersion.value == "00000000-0000-0000-0000-000000000000")
      this.insertRecord();
    else
      this.UpdateRecord();

  }


  insertRecord() {
    this.Verservice.PostVer().subscribe(
      res => {
        console.log(res);
        this.Verservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

  UpdateRecord() {
    this.Verservice.PutVer().subscribe(
      res => {
        console.log(res);
        this.Verservice.refreshList();
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

}

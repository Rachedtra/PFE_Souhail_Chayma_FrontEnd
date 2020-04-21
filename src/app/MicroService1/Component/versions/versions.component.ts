
import { Versionss } from './../../Models/Versionss.models';
import { Component, OnInit } from '@angular/core';
import { VersionsService } from '../../Services/versions.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {
 
  Ver: Versionss[] = new Array();

  constructor( private Verservice: VersionsService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    // this.resetForm();
  }

  resetForm() {

    this.Verservice.form.setValue({
      idVersion: "00000000-0000-0000-0000-000000000000",
      numero: "",
      versionLanguages: ""

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
        this.toastrService.success('', 'Version Ajoutee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Version Non Ajoute', 'Erreur');

      }
    )
  }

  UpdateRecord() {
    this.Verservice.PutVer().subscribe(
      res => {
        console.log(res);
        this.Verservice.refreshList();
        this.toastrService.info('', 'Version Modifiee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('version Non Modifiee', 'Erreur');

      }
    )
  }

}

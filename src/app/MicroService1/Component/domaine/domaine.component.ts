
import { Domaine } from './../../Models/Domaine.models';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomaineService } from '../../Services/domaine.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListDomaineComponent } from './list-domaine/list-domaine.component';
import { ListDomaineActiveComponent } from './list-domaine-active/list-domaine-active.component';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css'],
   providers:[ListDomaineComponent]
})
export class DomaineComponent implements OnInit {
  Dom: Domaine[] = new Array();
  Ref : BsModalRef ; 

  constructor(private formBuilder: FormBuilder, private Domservice: DomaineService,
    private toastrService: ToastrService,
    private domaineList:ListDomaineComponent,
    private modalService: BsModalService
  ) { }

  ngOnInit() {

    //this.resetForm();
  }
  resetForm() {

    this.Domservice.form.setValue({
      idDomain: "00000000-0000-0000-0000-000000000000",
      nom: "",
      domainProjets: "",
      isActiveDomaine : true ,

    });
  }
  onSubmit() {

    if (this.Domservice.form.controls.idDomain.value == "00000000-0000-0000-0000-000000000000")
      this.insertRecord();
    else
      this.UpdateRecord();

  }

  insertRecord() {
    this.Domservice.PostDom().subscribe(
      res => {
        console.log(res);
        this.Domservice.refreshList();
        this.Domservice.DomaineActive() ; 
        this.toastrService.success('', 'Domaine Ajoutee Avec Succés');

        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.success('', 'Domaine Non Ajoutee');

      }
    )
  }

  UpdateRecord() {
    this.Domservice.PutDom().subscribe(
      res => {
        console.log(res);
        this.Domservice.refreshList();
        this.Domservice.DomaineActive() ; 
        this.toastrService.info('', 'Domaine Modifiee Avec Succés');

        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Domaine non  Modifiee  ', 'Erreur',);

      }
    )
  }


}

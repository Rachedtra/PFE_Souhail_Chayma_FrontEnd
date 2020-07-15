import { Component, OnInit, TemplateRef } from '@angular/core';
import { VersionsService } from 'src/app/MicroService1/Services/versions.service';
import { Versionss } from 'src/app/MicroService1/Models/Versionss.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LanguagesComponent } from '../../languages/languages.component';
import { VersionsComponent } from 'src/app/MicroService1/Component/versions/versions.component';

@Component({
  selector: 'app-list-versions',
  templateUrl: './list-versions.component.html',
  styleUrls: ['./list-versions.component.css']
})
export class ListVersionsComponent implements OnInit {
  Ver: Versionss[] = new Array();
  versionFilter: any = { numero: null };

  constructor(private Verservice: VersionsService,
    private modalService: BsModalService,
    private toastrService: ToastrService, ) { }
    modalRef: BsModalRef;

  ngOnInit() {

    this.Verservice.refreshList();
    this.resetForm();
  }

  resetForm() {
    this.Verservice.form.setValue({
      idVersion: "00000000-0000-0000-0000-000000000000",
      numero: "",
      versionLanguages: "",
      isActiveVersion : true , 

    });
  }

  DeleteVer(idVersion: string) {
    this.Verservice.DeleteVer(idVersion).subscribe(res => {
      console.log(res);
      this.Verservice.refreshList();
    })

  }

  openModal(templatee: TemplateRef<VersionsComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }

  ConfirmModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Version Supprimee Avec Succés');
  }

  decline(): void {

    this.modalRef.hide();
    this.toastrService.warning('', 'Version Non Supprimee');
  }

  EditVer(versions) {
    this.Verservice.form.setValue(versions);
    this.modalRef = this.modalService.show(VersionsComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });



  }
  AddVer() {
    this.resetForm();
    this.modalRef = this.modalService.show(VersionsComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });

  }


}

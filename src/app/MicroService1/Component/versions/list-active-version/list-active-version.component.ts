import { Component, OnInit, TemplateRef } from '@angular/core';
import { VersionsComponent } from '../versions.component';
import { Versionss } from 'src/app/MicroService1/Models/Versionss.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VersionsService } from 'src/app/MicroService1/Services/versions.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-active-version',
  templateUrl: './list-active-version.component.html',
  styleUrls: ['./list-active-version.component.css']
})
export class ListActiveVersionComponent implements OnInit {

  Ver: Versionss[] = new Array();
  versionActiveFilter: any = { numero: null };

  modalRef: BsModalRef;
  constructor(private Verservice: VersionsService,
    private modalService: BsModalService,
    private toastrService: ToastrService, ) { }

  ngOnInit() {

    this.Verservice.VerActive();
   
    this.resetFormActiveVersion();
  }

  resetFormActiveVersion() {
    this.Verservice.form.setValue({
      idVersion: "00000000-0000-0000-0000-000000000000",
      numero: "",
      versionLanguages: "",
      isActiveVersion : true , 

    });
  }

  DeleteVerActive(idVersion: string) {
    this.Verservice.DeleteVer(idVersion).subscribe(res => {
      console.log(res);
      this.Verservice.VerActive();

      this.Verservice.refreshList();
    })

  }

  openModalVerActive(templatee: TemplateRef<VersionsComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }

  ConfirmModalVerActive(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirmVerActive(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Version Supprimee Avec Succés');
  }

  declineVerActive(): void {

    this.modalRef.hide();
    this.toastrService.warning('', 'Version Non Supprimee');
  }

  EditVerActive(versions,  templatee: TemplateRef<VersionsComponent>) {
    this.Verservice.form.setValue(versions);
    this.modalRef = this.modalService.show(templatee);


  }
  AddVerActive(templatee: TemplateRef<VersionsComponent>) {
    this.resetFormActiveVersion();
    this.modalRef = this.modalService.show(templatee);

  }


}

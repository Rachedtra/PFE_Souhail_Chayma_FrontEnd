import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { MsComponent } from '../ms.component';

@Component({
  selector: 'app-list-ms-active',
  templateUrl: './list-ms-active.component.html',
  styleUrls: ['./list-ms-active.component.css']
})
export class ListMsActiveComponent implements OnInit {
  modalRefActive: BsModalRef;
  MsFilterActive: any = { label: '' };


  constructor(private msService: MicroServiceService,
    private modalActive: BsModalService,
    private toastActive: ToastrService,
    private langService:LanguagesService
  
    ) { }

  ngOnInit() {
    this.msService.ListActive();
    this.langService.refreshList() ; 
    this.resetFormActive();
  }
  resetFormActive() {
    this.msService.form.setValue({
      idMs: "00000000-0000-0000-0000-000000000000",
      label: "",
      description: "",
      author: "",
      lien: "",
      diagClass: "",
      languagesFK: "00000000-0000-0000-0000-000000000000",
     // msprojet: "",
      // methodes: "",
      // languages :"",
      isActiveMs : true ,
      languageLabel : ""

  });
}
DeleteMs(idMs: string) {
  this.msService.DeleteMs(idMs).subscribe(res => {
    console.log(res);
    this.msService.refreshList();
  })

}

openModal(templatee: TemplateRef<MsComponent>) {
  this.modalRefActive = this.modalActive.show(templatee);


}

ConfirmModal(template: TemplateRef<MsComponent>) {
  this.modalRefActive = this.modalActive.show(template, { class: 'modal-sm' });
}

confirm(): void {

  this.modalRefActive.hide();
  this.toastActive.success('', 'Microservice Supprimee Avec Succés');
}

decline(): void {

  this.modalRefActive.hide();
  this.toastActive.warning('', 'Microservice Non Supprimee');
}

EditMs(ms,  templatee: TemplateRef<MsComponent>) {
  this.msService.form.setValue(ms);
  this.modalRefActive = this.modalActive.show(templatee);


}
AddMs(templatee: TemplateRef<MsComponent>) {
  this.resetFormActive();
  this.modalRefActive = this.modalActive.show(templatee);

}

}

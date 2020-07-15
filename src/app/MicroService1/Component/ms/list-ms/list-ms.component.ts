import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { MsComponent } from '../ms.component';

@Component({
  selector: 'app-list-ms',
  templateUrl: './list-ms.component.html',
  styleUrls: ['./list-ms.component.css']
})
export class ListMsComponent implements OnInit {

  MsFilter: any = { label: '' };


  constructor(private msService: MicroServiceService,
    private modalActive: BsModalService,
    private toastActive: ToastrService,
    private langService:LanguagesService
  
    ) { }
    modalRef: BsModalRef;

  ngOnInit() {
    this.msService.ListActive();
    this.msService.refreshList() ; 
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
    this.msService.ListActive();

    this.msService.refreshList();
  })

}

openModal(templatee: TemplateRef<any>) {
  this.modalRef = this.modalActive.show(templatee);


}

ConfirmModal(template: TemplateRef<any>) {
  this.modalRef = this.modalActive.show(template, { class: 'modal-sm' });
}

confirm(): void {

  this.modalRef.hide();
  this.toastActive.success('', 'Microservice Supprimee Avec Succés');
}

decline(): void {

  this.modalRef.hide();
  this.toastActive.warning('', 'Microservice Non Supprimee');
}

EditMs(ms) {
  this.msService.form.setValue(ms);
  this.modalRef = this.modalActive.show(MsComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });

}
AddMs() {
  this.resetFormActive();
  this.modalRef = this.modalActive.show(MsComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });
}

}

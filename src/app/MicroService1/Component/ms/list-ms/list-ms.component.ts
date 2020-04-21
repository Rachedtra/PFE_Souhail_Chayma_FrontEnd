import { Component, OnInit, TemplateRef } from '@angular/core';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MsComponent } from '../ms.component';


@Component({
  selector: 'app-list-ms',
  templateUrl: './list-ms.component.html',
  styleUrls: ['./list-ms.component.css']
})
export class ListMsComponent implements OnInit {
  modalRef: BsModalRef;
  


  constructor(private msService: MicroServiceService,
    private modalService: BsModalService,
    private toastrService: ToastrService,
  
    ) { }

  ngOnInit() {
    this.msService.refreshList();
    this.resetForm();
  }
  resetForm() {
      this.msService.form.setValue({
        idMs: "00000000-0000-0000-0000-000000000000",
        label: "",
        description: "",
        author: "",
        lien: "",
        diagClass: "",
        languagesFK: "00000000-0000-0000-0000-000000000000",
        msprojet: "",
        methodes: "",
        languages :"",

    });
  }




  DeleteMs(idMs: string) {
    this.msService.DeleteMs(idMs).subscribe(res => {
      console.log(res);
      this.msService.refreshList();
    })

  }

  openModal(templatee: TemplateRef<MsComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }

  ConfirmModal(template: TemplateRef<MsComponent>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Microservice Supprimee Avec Succés');
  }

  decline(): void {

    this.modalRef.hide();
    this.toastrService.warning('', 'Microservice Non Supprimee');
  }

  EditMs(ms,  templatee: TemplateRef<MsComponent>) {
    this.msService.form.setValue(ms);
    this.modalRef = this.modalService.show(templatee);


  }
  AddMs(templatee: TemplateRef<MsComponent>) {
    this.resetForm();
    this.modalRef = this.modalService.show(templatee);

  }



}

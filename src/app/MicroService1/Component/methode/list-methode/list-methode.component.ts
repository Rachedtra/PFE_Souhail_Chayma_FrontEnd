import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MethodeService } from 'src/app/MicroService1/Services/methode.service';
import { ToastrService } from 'ngx-toastr';
import { MethodeComponent } from '../methode.component';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';

@Component({
  selector: 'app-list-methode',
  templateUrl: './list-methode.component.html',
  styleUrls: ['./list-methode.component.css']
})
export class ListMethodeComponent implements OnInit {

  modalRef: BsModalRef;
  

  constructor(private mService: MethodeService,
    private modalService: BsModalService,
    private toastrService: ToastrService, 
    private MsService : MicroServiceService) { }

  ngOnInit() {
    this.mService.refreshList();
    this.MsService.refreshList() ; 
    this.resetForm();
  }
  resetForm() {
    this.mService.form.setValue({
      idMethode: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      input: "",
      output: "",
      microService: "",
      msFk: "00000000-0000-0000-0000-000000000000",
      isActiveMethode : true ,

  });
  }

  DeleteMethode(idMethode: string) {
    this.mService.DeleteMethode(idMethode).subscribe(res => {
      console.log(res);
      this.mService.refreshList();
    })

  }

  openModal(templatee: TemplateRef<MethodeComponent>) {
    this.modalRef = this.modalService.show(templatee);


  }

  ConfirmModal(template: TemplateRef<MethodeComponent>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    this.modalRef.hide();
    this.toastrService.success('', 'Methode Supprimee Avec Succés');
  }

  decline(): void {

    this.modalRef.hide();
    this.toastrService.warning('', 'Methode Non Supprimee');
  }

  EditMethode(ms,  templatee: TemplateRef<MethodeComponent>) {
    this.mService.form.setValue(ms);
    this.modalRef = this.modalService.show(templatee);


  }
  AddMethode(templatee: TemplateRef<MethodeComponent>) {
    this.resetForm();
    this.modalRef = this.modalService.show(templatee);

  }


}

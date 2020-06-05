import { Component, OnInit, TemplateRef } from '@angular/core';
import { MethodeComponent } from '../methode.component';
import { MethodeService } from 'src/app/MicroService1/Services/methode.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';

@Component({
  selector: 'app-lis-methode-active',
  templateUrl: './lis-methode-active.component.html',
  styleUrls: ['./lis-methode-active.component.css']
})
export class LisMethodeActiveComponent implements OnInit {

  methodeFilterActive: any = { nom: '' };
  modalRef: BsModalRef;
  

  constructor(private mService: MethodeService,
    private modalService: BsModalService,
    private toastrService: ToastrService, 
    private MsService : MicroServiceService) { }

  ngOnInit() {
    this.mService.refreshList();
    this.MsService.refreshList() ; 
    this.mService.MethodeActive() ; 
    this.resetForm();
  }
  resetForm() {
    this.mService.form.setValue({
      idMethode: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      input: "",
      output: "",
   
      msFk: "00000000-0000-0000-0000-000000000000",
      isActiveMethode : true ,
    msLabel : "" ,

  });
  }

  DeleteMethode(idMethode: string) {
    this.mService.DeleteMethode(idMethode).subscribe(res => {
      console.log(res);
      this.mService.MethodeActive() ; 

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

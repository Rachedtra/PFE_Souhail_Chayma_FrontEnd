import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MethodeService } from 'src/app/MicroService1/Services/methode.service';
import { ToastrService } from 'ngx-toastr';
import { MethodeComponent } from '../methode.component';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { Methode } from 'src/app/MicroService1/Models/Methode.models';

@Component({
  selector: 'app-list-methode',
  templateUrl: './list-methode.component.html',
  styleUrls: ['./list-methode.component.css']
})
export class ListMethodeComponent implements OnInit {
  methodeFilter: any = { nom: '' };
  

  constructor(private mService: MethodeService,
    private modalService: BsModalService,
    private toastrService: ToastrService, 
    private Micro : MicroServiceService) { }

    bsModalRef: BsModalRef;

  ngOnInit() {
    this.mService.refreshList();
    this.Micro.refreshList() ; 
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
      this.mService.refreshList();
    })

  }

  openModal(templatee: TemplateRef<MethodeComponent>) {
    this.bsModalRef = this.modalService.show(templatee);


  }

  ConfirmModal(template: TemplateRef<MethodeComponent>) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {

    this.bsModalRef.hide();
    this.toastrService.success('', 'Methode Supprimee Avec Succés');
  }

  decline(): void {

    this.bsModalRef.hide();
    this.toastrService.warning('', 'Methode Non Supprimee');
  }

  EditMethode(ms : Methode) {
    this.mService.form.setValue(ms);
    this.bsModalRef = this.modalService.show(MethodeComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });


  }
  AddMethode() {
    this.resetForm();
    this.bsModalRef = this.modalService.show(MethodeComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });;

  }


}

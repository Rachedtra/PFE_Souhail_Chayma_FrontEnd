import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjetService } from 'src/app/MicroService1/Services/projet.service';
import { ToastrService } from 'ngx-toastr';
import { ProjetComponent } from '../projet.component';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  modalRef1: BsModalRef;
  

  constructor(private projetService: ProjetService,
    private modal: BsModalService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    this.projetService.refreshList();
    this.resetForme();

  }
  resetForme() {
    this.projetService.pj.setValue({
      idProjet: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      domainProjets: "",
      msprojet: "",
  });
  }


  DeleteProjet(idProjet: string) {
    this.projetService.DeleteProjet(idProjet).subscribe(res => {
      console.log(res);
      this.projetService.refreshList();
    })

  }



  Confirmation(template: TemplateRef<ProjetComponent>) {
    this.modalRef1 = this.modal.show(template, { class: 'modal-sm' });
  }

  confirmProjet(): void {

    this.modalRef1.hide();
    this.toastr.success('', 'Projet Supprimee Avec Succés');
  }

  declineProjet(): void {

    this.modalRef1.hide();
    this.toastr.warning('', 'Projet Non Supprimee');
  }

  EditProjet(prjt,  templatee: TemplateRef<ProjetComponent>) {
    this.projetService.pj.setValue(prjt);
    this.modalRef1 = this.modal.show(templatee);


  }
  AddProjet(templatee: TemplateRef<ProjetComponent>) {
    this.resetForme();
    this.modalRef1 = this.modal.show(templatee);

  }


}

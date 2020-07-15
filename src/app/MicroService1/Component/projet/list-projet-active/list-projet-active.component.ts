import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProjetComponent } from 'src/app/MicroService1/Component/projet/projet.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjetService } from 'src/app/MicroService1/Services/projet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-projet-active',
  templateUrl: './list-projet-active.component.html',
  styleUrls: ['./list-projet-active.component.css']
})
export class ListProjetActiveComponent implements OnInit {

  projetFilter: any = { nom: '' };

  modalRef1: BsModalRef;
  

  constructor(private projetService: ProjetService,
    private modal: BsModalService,
    private toastr: ToastrService, ) { }

  ngOnInit() {
    this.projetService.refreshList();
    this.projetService.ProjetActive() ; 
    this.resetForme();

  }
  resetForme() {
    this.projetService.pj.setValue({
      idProjet: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      domainProjets: "",
      msprojet: "",
      isActiveProjet : true ,
  });
  }


  DeleteProjet(idProjet: string) {
    this.projetService.DeleteProjet(idProjet).subscribe(res => {
      console.log(res);
      this.projetService.ProjetActive() ; 

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

  EditProjet(prjt) {
    this.projetService.pj.setValue(prjt);
    this.modalRef1 = this.modal.show(ProjetComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });


  }
  AddProjet(templatee: TemplateRef<ProjetComponent>) {
    this.resetForme();
    this.modalRef1 = this.modal.show(ProjetComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  }


}

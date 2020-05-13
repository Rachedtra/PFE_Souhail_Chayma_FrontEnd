import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomaineProjetComponent } from '../domaine-projet.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomaineProjetService } from 'src/app/MicroService1/Services/domaine-projet.service';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { ProjetService } from 'src/app/MicroService1/Services/projet.service';

@Component({
  selector: 'app-list-domaine-projet-active',
  templateUrl: './list-domaine-projet-active.component.html',
  styleUrls: ['./list-domaine-projet-active.component.css']
})
export class ListDomaineProjetActiveComponent implements OnInit {

  modalRefDomProjet: BsModalRef;
  DomProjetFilter: any = { nomDomaine: '' };



  constructor(private domprojetService: DomaineProjetService,
    private modalDomprojet: BsModalService,
    private DomProjetInfo: ToastrService,
    private domService:DomaineService,
    private projetServie : ProjetService
  
    ) { }

  ngOnInit() {
    this.domprojetService.ListActiveDomProjet();
    this.domService.refreshList() ; 
     this.projetServie.refreshList() ; 
    this.resetFormDomprojetActive();
  }

  resetFormDomprojetActive() {
    this.domprojetService.form.setValue({
      idDomainProjet: "00000000-0000-0000-0000-000000000000",
      idDomain: "",
      idProjet: "",
      isActiveDomPro: true,
      nomDomaine: "",
      nomProjet: "",
  }); 
}

DeleteDp(idDomainProjet: string) {
  this.domprojetService.DeleteDomProjet(idDomainProjet).subscribe(res => {
    console.log(res);
    this.domprojetService.ListActiveDomProjet();
  })

}

openModalDp(templatee: TemplateRef<DomaineProjetComponent>) {
  this.modalRefDomProjet = this.modalDomprojet.show(templatee);


}

ConfirmModalDp(template: TemplateRef<DomaineProjetComponent>) {
  this.modalRefDomProjet = this.modalDomprojet.show(template, { class: 'modal-sm' });
}

confirmDp(): void {

  this.modalRefDomProjet.hide();
  this.DomProjetInfo.success('', 'Domaine Projet Supprimee Avec Succés');
}

declineDp(): void {

  this.modalRefDomProjet.hide();
  this.DomProjetInfo.warning('', 'Domaine Projet Non Supprimee');
}

EditDp(ms,  templatee: TemplateRef<DomaineProjetComponent>) {
  this.domprojetService.form.setValue(ms);
  this.modalRefDomProjet = this.modalDomprojet.show(templatee);


}
AddDp(templatee: TemplateRef<DomaineProjetComponent>) {
  this.resetFormDomprojetActive();
  this.modalRefDomProjet = this.modalDomprojet.show(templatee);

}



}

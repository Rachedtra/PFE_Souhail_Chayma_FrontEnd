import { Component, OnInit, TemplateRef } from '@angular/core';
import { MsProjetComponent } from '../ms-projet.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MsProjetService } from 'src/app/MicroService1/Services/ms-projet.service';
import { ToastrService } from 'ngx-toastr';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { ProjetService } from 'src/app/MicroService1/Services/projet.service';

@Component({
  selector: 'app-list-ms-projet-active',
  templateUrl: './list-ms-projet-active.component.html',
  styleUrls: ['./list-ms-projet-active.component.css']
})
export class ListMsProjetActiveComponent implements OnInit {

  modalRefMsProjet: BsModalRef;
  MsProjetFilterActive: any = { labelMS: '' };



  constructor(private msprojetService: MsProjetService,
    private modalMsprojet: BsModalService,
    private MsProjetInfo: ToastrService,
    private MsService:MicroServiceService,
    private projetServie : ProjetService
  
    ) { }

  ngOnInit() {
    this.msprojetService.MsProjetActive();
    this.MsService.refreshList() ; 
     this.projetServie.refreshList() ; 
    this.resetFormMsprojet();
  }

  resetFormMsprojet() {
    this.msprojetService.form.setValue({
      idMsProjet: "00000000-0000-0000-0000-000000000000",
      idMs: "",
      idProjet: "",
      isActiveMsVer: true,
      labelMS: "",
      nomProjet: "",
  }); 
}

DeleteMp(idMsProjet: string) {
  this.msprojetService.DeleteMsProjet(idMsProjet).subscribe(res => {
    console.log(res);
    this.msprojetService.getMsProjet();
  })

}

openModalMp(templatee: TemplateRef<MsProjetComponent>) {
  this.modalRefMsProjet = this.modalMsprojet.show(templatee);


}

ConfirmModalMp(template: TemplateRef<MsProjetComponent>) {
  this.modalRefMsProjet = this.modalMsprojet.show(template, { class: 'modal-sm' });
}

confirmMp(): void {

  this.modalRefMsProjet.hide();
  this.MsProjetInfo.success('', 'Micro Service Projet Supprimee Avec Succés');
}

declineMp(): void {

  this.modalRefMsProjet.hide();
  this.MsProjetInfo.warning('', 'Micro Service Projet Non Supprimee');
}

EditMp(ms,  templatee: TemplateRef<MsProjetComponent>) {
  this.msprojetService.form.setValue(ms);
  this.modalRefMsProjet = this.modalMsprojet.show(templatee);


}
AddMp(templatee: TemplateRef<MsProjetComponent>) {
  this.resetFormMsprojet();
  this.modalRefMsProjet = this.modalMsprojet.show(templatee);

}
}
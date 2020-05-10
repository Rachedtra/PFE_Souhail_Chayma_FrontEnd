import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { DemandeInfoComponent } from '../demande-info.component';

@Component({
  selector: 'app-list-demande-info',
  templateUrl: './list-demande-info.component.html',
  styleUrls: ['./list-demande-info.component.css']
})
export class ListDemandeInfoComponent implements OnInit {

  modalInfoRef: BsModalRef;

  constructor( private InfoService: DemandeInfoService,
    private notifInfo: ToastrService,
    private modalInfo: BsModalService,
    
    ) { }


    ngOnInit() {
      this.InfoService.GetInfo();
      this.ResetInfo();
    }
    ResetInfo() {
      this.InfoService.form.setValue({
        idDemandeInfo: "00000000-0000-0000-0000-000000000000",
        description: "",
        date: "",
        commDemandeInfos: "",
        catDemandeInfos: "",
        isActiveInfo : true 
    });
  }

  DeleteInfo(id: string) {
    this.InfoService.DeleteInfo(id).subscribe(res => {
      console.log(res);
      this.InfoService.GetInfo();
    })
  
  }
  
  openInfo(templatee: TemplateRef<DemandeInfoComponent>) {
    this.modalInfoRef = this.modalInfo.show(templatee);
  
  
  }
  
  ConfirmInfoModal(template: TemplateRef<DemandeInfoComponent>) {
    this.modalInfoRef = this.modalInfo.show(template, { class: 'modal-sm' });
  }
  
  confirmInfo(): void {
  
    this.modalInfoRef.hide();
    this.notifInfo.success('', 'Demande Info Supprimee Avec Succés');
  }
  
  declineInfo(): void {
  
    this.modalInfoRef.hide();
    this.notifInfo.warning('', 'Commentaire Non Supprimee');
  }
  
  EditInfo(inf,  templatee: TemplateRef<DemandeInfoComponent>) {
    this.InfoService.form.setValue(inf);
    this.modalInfoRef = this.modalInfo.show(templatee);
  
  
  }
  AddInfo(templatee: TemplateRef<DemandeInfoComponent>) {
    this.ResetInfo();
    this.modalInfoRef = this.modalInfo.show(templatee);
  
  }

}

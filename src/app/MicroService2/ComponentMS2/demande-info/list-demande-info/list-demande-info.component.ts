import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { DemandeInfoComponent } from '../demande-info.component';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';

@Component({
  selector: 'app-list-demande-info',
  templateUrl: './list-demande-info.component.html',
  styleUrls: ['./list-demande-info.component.css']
})
export class ListDemandeInfoComponent implements OnInit {

  modalInfoRef: BsModalRef;
  DemandeInfoFilter: any = { titre: '' };
  constructor( private InfoService: DemandeInfoService,
    private notifInfo: ToastrService,
    private modalInfo: BsModalService,
    private CatService : CategorieService,
    private domService : DomaineService ,
    
    ) { }


    ngOnInit() {
      this.InfoService.GetInfo();
      this.CatService.GetCat() ; 
      this.domService.refreshList() ;
      this.ResetInfo();
    }
    ResetInfo() {
      this.InfoService.form.setValue({
        idDemandeInfo: "00000000-0000-0000-0000-000000000000",
        description: "",
        date: new Date(),
        // commDemandeInfos: "",
        // catDemandeInfos: "",
        isActiveInfo : true ,
        domaineNom : "",
        titre : "" ,
        idDomain:"",
        fkUser:"",
        firstName:"",
        lastName:"",

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
    this.notifInfo.warning('', 'Demande Info  Non Supprimee');
  }
  
  EditInfo(inf) {
    this.InfoService.form.setValue(inf);
    this.modalInfoRef = this.modalInfo.show(DemandeInfoComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  
  }
  AddInfo() {
    this.ResetInfo();
    this.modalInfoRef = this.modalInfo.show(DemandeInfoComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
  
  }

}

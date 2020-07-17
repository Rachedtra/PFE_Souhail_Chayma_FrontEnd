import { Component, OnInit, TemplateRef } from '@angular/core';
import { CatInfoComponent } from '../cat-info.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CatDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/cat-demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';

@Component({
  selector: 'app-list-cat-info-active',
  templateUrl: './list-cat-info-active.component.html',
  styleUrls: ['./list-cat-info-active.component.css']
})
export class ListCatInfoActiveComponent implements OnInit {

  modalRefCatInfo: BsModalRef;
  CatInfoFilter: any = { labelCat: '' };



  constructor(private CatInfoService: CatDemandeInfoService,
    private modalCatInfo: BsModalService,
    private CatInfoInfo: ToastrService,
    private CatService:CategorieService,
    private InfoetServie : DemandeInfoService
  
    ) { }

  ngOnInit() {
    this.CatInfoService.getCatInfo();
    this.CatService.GetCat() ;
    this.CatInfoService.CategorieInfoActive() ;
     this.InfoetServie.GetInfo() ; 
    this.resetFormCatInfo();
  }

  resetFormCatInfo() {
    this.CatInfoService.form.setValue({
      idCatDemande: "00000000-0000-0000-0000-000000000000",
      idCat: "",
      idDemandeInfo: "",
      isActiveCatInfo: true,
      labelCat: "",
      descriptionInfo: "",
     titreInfo : "",
  }); 
}

DeleteCi(idCatDemande: string) {
  this.CatInfoService.DeleteCatInfo(idCatDemande).subscribe(res => {
    console.log(res);
    this.CatInfoService.CategorieInfoActive() ;
    this.CatInfoService.getCatInfo();
  })

}

openModalCi(templatee: TemplateRef<CatInfoComponent>) {
  this.modalRefCatInfo = this.modalCatInfo.show(templatee);


}

ConfirmModalCi(template: TemplateRef<CatInfoComponent>) {
  this.modalRefCatInfo = this.modalCatInfo.show(template, { class: 'modal-sm' });
}

confirmCi(): void {

  this.modalRefCatInfo.hide();
  this.CatInfoInfo.success('', 'Categorie Demande Information Supprimee Avec Succés');
}

declineCi(): void {

  this.modalRefCatInfo.hide();
  this.CatInfoInfo.warning('', 'Categorie Demande Information Non Supprimee');
}

EditCi(ci,  templatee: TemplateRef<CatInfoComponent>) {
  this.CatInfoService.form.setValue(ci);
  this.modalRefCatInfo = this.modalCatInfo.show(templatee);


}
AddCi(templatee: TemplateRef<CatInfoComponent>) {
  this.resetFormCatInfo();
  this.modalRefCatInfo = this.modalCatInfo.show(templatee);

}

}

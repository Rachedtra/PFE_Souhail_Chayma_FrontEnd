import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategorieComponent } from '../categorie.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categorie-active',
  templateUrl: './list-categorie-active.component.html',
  styleUrls: ['./list-categorie-active.component.css']
})
export class ListCategorieActiveComponent implements OnInit {
  CatFilterActive: any = { label: '' };

  constructor( private categorieService: CategorieService,
    private notif: ToastrService,
    private modalCategorie: BsModalService,
    
    ) { }
    modalCatRef: BsModalRef;

  ngOnInit() {
    this.categorieService.GetCat();
    this.categorieService.CategorieActive() ;

    this.ResetCat();
  }
  ResetCat() {
    this.categorieService.form.setValue({
      idCat: "00000000-0000-0000-0000-000000000000",
      label: "",
      catDemandeInfos: "",
      sousCategories :"",
      isActiveCat : true ,

  });
}

DeleteCat(id: string) {
  this.categorieService.DeleteCat(id).subscribe(res => {
    console.log(res);
    this.categorieService.CategorieActive() ;
    this.categorieService.GetCat();

  })

}

openCategorie(templatee: TemplateRef<CategorieComponent>) {
  this.modalCatRef = this.modalCategorie.show(templatee);


}

ConfirmCategorieModal(template: TemplateRef<CategorieComponent>) {
  this.modalCatRef = this.modalCategorie.show(template, { class: 'modal-sm' });
}

confirmCategorie(): void {

  this.modalCatRef.hide();
  this.notif.success('', 'Categorie Supprimee Avec Succés');
}

declineCategorie(): void {

  this.modalCatRef.hide();
  this.notif.warning('', 'Categorie Non Supprimee');
}

EditCat(cat) {
  this.categorieService.form.setValue(cat);
  this.modalCatRef = this.modalCategorie.show(CategorieComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });
}
AddCat() {
  this.ResetCat();
  this.modalCatRef = this.modalCategorie.show(CategorieComponent,{
    class:'modal-dialog-centered', ignoreBackdropClick: true 
  });

}
}
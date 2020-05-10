import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategorieComponent } from '../categorie.component';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  modalCatRef: BsModalRef;

  constructor( private categorieService: CategorieService,
    private notif: ToastrService,
    private modalCategorie: BsModalService,
    
    ) { }

  ngOnInit() {
    this.categorieService.GetCat();
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

EditCat(cat,  templatee: TemplateRef<CategorieComponent>) {
  this.categorieService.form.setValue(cat);
  this.modalCatRef = this.modalCategorie.show(templatee);


}
AddCat(templatee: TemplateRef<CategorieComponent>) {
  this.ResetCat();
  this.modalCatRef = this.modalCategorie.show(templatee);

}

}

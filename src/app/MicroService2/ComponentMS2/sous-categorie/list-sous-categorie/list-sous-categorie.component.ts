import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SousCategorieService } from 'src/app/MicroService2/ServicesMS2/sous-categorie.service';
import { ToastrService } from 'ngx-toastr';
import { SousCategorieComponent } from '../sous-categorie.component';

@Component({
  selector: 'app-list-sous-categorie',
  templateUrl: './list-sous-categorie.component.html',
  styleUrls: ['./list-sous-categorie.component.css']
})
export class ListSousCategorieComponent implements OnInit {

  modalSousCatRef: BsModalRef;

  constructor( private SousCatoService: SousCategorieService,
    private notifSousCat: ToastrService,
    private modalSousCat: BsModalService,
    
    ) { }


    ngOnInit() {
      this.SousCatoService.GetSousCat();
      this.ResetSousCat();
    }
    ResetSousCat() {
      this.SousCatoService.form.setValue({
        idSousCate: "00000000-0000-0000-0000-000000000000",
        label: "",
        catFK: "",
        isActiveSousCat : true,
        catLabel : ""
        
    });
  }

  DeleteSousCat(id: string) {
    this.SousCatoService.DeleteSousCat(id).subscribe(res => {
      console.log(res);
      this.SousCatoService.GetSousCat();
    })
  
  }
  

  
  openSousCat(templatee: TemplateRef<SousCategorieComponent>) {
    this.modalSousCatRef = this.modalSousCat.show(templatee);
  
  
  }
  
  ConfirmSousCatModal(template: TemplateRef<SousCategorieComponent>) {
    this.modalSousCatRef = this.modalSousCat.show(template, { class: 'modal-sm' });
  }
  
  confirmSousCat(): void {
  
    this.modalSousCatRef.hide();
    this.notifSousCat.success('', 'Sous Categorie Supprimee Avec Succés');
  }
  
  declineSousCat(): void {
  
    this.modalSousCatRef.hide();
    this.notifSousCat.warning('', 'Sous Categorie Non Supprimee');
  }
  
  EditSousCat(sc,  templatee: TemplateRef<SousCategorieComponent>) {
    this.SousCatoService.form.setValue(sc);
    this.modalSousCatRef = this.modalSousCat.show(templatee);
  
  
  }
  AddSousCat(templatee: TemplateRef<SousCategorieComponent>) {
    this.ResetSousCat();
    this.modalSousCatRef = this.modalSousCat.show(templatee);
  
  }

}

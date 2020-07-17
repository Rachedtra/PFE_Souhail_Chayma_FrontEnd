import { Component, OnInit, TemplateRef } from '@angular/core';
import { SousCategorieComponent } from '../sous-categorie.component';
import { SousCategorieService } from 'src/app/MicroService2/ServicesMS2/sous-categorie.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-sous-categorie-active',
  templateUrl: './list-sous-categorie-active.component.html',
  styleUrls: ['./list-sous-categorie-active.component.css']
})
export class ListSousCategorieActiveComponent implements OnInit {

  modalSousCatRef: BsModalRef;
  SousCatFilterActive: any = { label: '' };
  constructor( private SousCatoService: SousCategorieService,
    private notifSousCat: ToastrService,
    private modalSousCat: BsModalService,
    
    ) { }


    ngOnInit() {
      this.SousCatoService.SousCategorieActive();
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
      this.SousCatoService.SousCategorieActive();
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
  
  EditSousCat(sc) {
    this.SousCatoService.form.setValue(sc);
    this.modalSousCatRef = this.modalSousCat.show(SousCategorieComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });  
  
  
  }
  AddSousCat() {
    this.ResetSousCat();
    this.modalSousCatRef = this.modalSousCat.show(SousCategorieComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });  
  
  }

}

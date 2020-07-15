import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomaineComponent } from 'src/app/MicroService1/Component/domaine/domaine.component';
import { Domaine } from 'src/app/MicroService1/Models/Domaine.models';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-domaine-active',
  templateUrl: './list-domaine-active.component.html',
  styleUrls: ['./list-domaine-active.component.css'],
})
export class ListDomaineActiveComponent implements OnInit {

  Dom: Domaine[] = new Array();
  DomaaineFilter: any = { nom: '' };
 
   constructor(private Domservice: DomaineService,
     private BsmodalService: BsModalService,
     private t: ToastrService, ) { }
     RefDomaine: BsModalRef;

   ngOnInit() {
 
     this.Domservice.DomaineActive();
     this.resetFormActiveDom();
   }
 
   resetFormActiveDom() {
     this.Domservice.form.setValue({
       idDomain: "00000000-0000-0000-0000-000000000000",
       nom: "",
       domainProjets: "",
       isActiveDomaine : true,
 
     });
   }
 
 
 
   DeleteDom(Domaine: Domaine) {
  
   }
 
 
   ConfirmModalDomaine(template: TemplateRef<any>) {
     this.RefDomaine = this.BsmodalService.show(template, { class: 'modal-sm' });
   }
 
   confirmModal(): void {
 
     this.RefDomaine.hide();
     this.t.success('', 'Domaine Supprimee Avec Succés');
   }
 
   declineModal(): void {
 
     this.RefDomaine.hide();
     this.t.warning('', 'Domaine Non Supprimee');
   }
 
 
   EditDom(domaine) {
     this.Domservice.form.setValue(domaine);
     this.RefDomaine = this.BsmodalService.show(DomaineComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
   }
 
   AddDom() {
     this.resetFormActiveDom();
     this.RefDomaine = this.BsmodalService.show(DomaineComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });
 
   }
 

}

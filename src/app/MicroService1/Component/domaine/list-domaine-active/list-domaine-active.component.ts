import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomaineComponent } from '../domaine.component';
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
  public Ref: BsModalRef;
  DomaaineFilter: any = { nom: '' };
 
   constructor(private Domservice: DomaineService,
     private BsmodalService: BsModalService,
     private t: ToastrService, ) { }
 
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
 
 
 
   DeleteDom(idDomaine: string) {
     this.Domservice.DeleteDom(idDomaine).subscribe(res => {
       console.log(res);
       this.Domservice.refreshList();
       this.Domservice.DomaineActive() ; 
     }) ;
 
   }
 
 
   ConfirmModalDomaine(template: TemplateRef<any>) {
     this.Ref = this.BsmodalService.show(template, { class: 'modal-sm' });
   }
 
   confirmModal(): void {
 
     this.Ref.hide();
     this.t.success('', 'Domaine Supprimee Avec Succés');
   }
 
   declineModal(): void {
 
     this.Ref.hide();
     this.t.warning('', 'Domaine Non Supprimee');
   }
 
 
   EditDom(domaine,templatee: TemplateRef<DomaineComponent>) {
     this.Domservice.form.setValue(domaine);
     this.Ref = this.BsmodalService.show(templatee);
   }
 
   AddDom(templatee: TemplateRef<DomaineComponent>) {
     this.resetFormActiveDom();
     this.Ref = this.BsmodalService.show(templatee);
 
   }
 

}

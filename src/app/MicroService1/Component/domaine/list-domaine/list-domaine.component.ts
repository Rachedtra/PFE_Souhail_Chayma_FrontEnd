import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { Domaine } from 'src/app/MicroService1/Models/Domaine.models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DomaineComponent } from 'src/app/MicroService1/Component/domaine/domaine.component';

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {
  Dom: Domaine[] = new Array();
 DomaaineFilter: any = { nom: '' };

  constructor(private Domservice: DomaineService,
    private BsmodalService: BsModalService,
    private t: ToastrService, ) { }
    RefDomaine: BsModalRef;

  ngOnInit() {

    this.Domservice.refreshList();
    this.resetForm();
  }

  resetForm() {
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
    })

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
    this.resetForm();
    this.RefDomaine = this.BsmodalService.show(DomaineComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    });

  }

}




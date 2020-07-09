import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 

})
export class HomeComponent implements OnInit {

  constructor(    private modalCommMs: BsModalService,
    ) { }
  modalRefCommMs: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  templatee: TemplateRef<AuthentificationComponent>
  ngOnInit() {
   
   // this.openModalAuth(this.templatee);


  }
  openModalAuth(templatee: TemplateRef<AuthentificationComponent>) {
    this.modalRefCommMs = this.modalCommMs.show(templatee,this.config);
  
  
  }


}

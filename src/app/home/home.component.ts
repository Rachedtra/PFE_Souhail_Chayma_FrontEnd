import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthentificationComponent } from '../authentification/authentification.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 

})
export class HomeComponent implements OnInit {

  constructor(    private modalCommMs: BsModalService,
    ) { }
  modalRefCommMs: BsModalRef;

  ngOnInit() {
   if (localStorage.getItem('TokenPlatform')==null)

    { 
      this.openModalAuth() ;
    }

  }
  openModalAuth() {
    this.modalRefCommMs = this.modalCommMs.show(AuthentificationComponent,{
      class:'modal-dialog-centered', ignoreBackdropClick: true 
    }); 
  }


}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommMsComponent } from '../comm-ms.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { CommMsService } from 'src/app/MicroService1/Services/comm-ms.service';
@Component({
  selector: 'app-list-comm-ms-active',
  templateUrl: './list-comm-ms-active.component.html',
  styleUrls: ['./list-comm-ms-active.component.css']
})
export class ListCommMsActiveComponent implements OnInit {

  modalRefCommMs: BsModalRef;
  CommMsFilter: any = { labelMs: '' };
   constructor(private CommMsService: CommMsService,
     private modalCommMs: BsModalService,
     private CommMstInfo: ToastrService,
     private MsService:MicroServiceService,
     private CommService : CommentaireService
   
     ) { }
 
   ngOnInit() {
     this.MsService.ListActive() ; 
     this.CommService.GetCommentaires() ; 
     this.CommMsService.getCommMs() ;
     this.CommMsService.getCommMsActive();
     this.resetFormCommMs() ; 
     
   }
   resetFormCommMs() {
     this.CommMsService.form.setValue({
       idCommMs: "00000000-0000-0000-0000-000000000000",
       idMs: "",
       idComm: "",
       isActiveCommMs: true,
       labelMs: "",
      
   }); 
 }
 
 DeleteCommMs(idCommMs: string) {
   this.CommMsService.DeleteCommMs(idCommMs).subscribe(res => {
     console.log(res);
     this.CommMsService.getCommMsActive();
     this.CommMsService.getCommMs();
   })
 
 }
 
 openModalCommMs(templatee: TemplateRef<CommMsComponent>) {
   this.modalRefCommMs = this.modalCommMs.show(templatee);
 
 
 }
 
 ConfirmModalCommMs(template: TemplateRef<CommMsComponent>) {
   this.modalRefCommMs = this.modalCommMs.show(template, { class: 'modal-sm' });
 }
 
 confirmCommMs(): void {
 
   this.modalRefCommMs.hide();
   this.CommMstInfo.success('', 'Commentaires Ms Supprimee Avec Succés');
 }
 
 declineCommMs(): void {
 
   this.modalRefCommMs.hide();
   this.CommMstInfo.warning('', 'Commentaires Ms Non Supprimee');
 }
 
 EditCommMs(ms,  templatee: TemplateRef<CommMsComponent>) {
   this.CommMsService.form.setValue(ms);
   this.modalRefCommMs = this.modalCommMs.show(templatee);
 
 
 
 }
 AddCommMs(templatee: TemplateRef<CommMsComponent>) {
   this.resetFormCommMs();
   this.modalRefCommMs = this.modalCommMs.show(templatee);
 
 }

}

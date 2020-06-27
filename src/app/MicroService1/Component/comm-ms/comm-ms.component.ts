import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommMsService } from 'src/app/MicroService1/Services/comm-ms.service';
import { MicroServiceService } from '../../Services/micro-service.service';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListCommMsComponent } from './list-comm-ms/list-comm-ms.component';
@Component({
  selector: 'app-comm-ms',
  templateUrl: './comm-ms.component.html',
  styleUrls: ['./comm-ms.component.css']
})
export class CommMsComponent implements OnInit {

  constructor(private CommMsService: CommMsService,
    private MsService:MicroServiceService,
    private CommService : CommentaireService,
    private CommMstInfo: ToastrService,
    private CommMsListe : ListCommMsComponent
   ) { }

  ngOnInit() {
    this.MsService.ListActive() ; 
    this.CommService.GetCommentaires() ; 
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

onSubmitCommMs ()
{
  if (this.CommMsService.form.controls.idCommMs.value == "00000000-0000-0000-0000-000000000000")
  this.insertCommMs();
else
  this.UpdateCommMs();
}
UpdateCommMs() {
    this.CommMsService.PutCommMs().subscribe(
      res => {
        this.CommMsListe.modalRefCommMs.hide() ;
        console.log(res);
        this.CommMsService.getCommMs();
        this.CommMsService.getCommMsActive();
        this.CommMstInfo.info('', 'Commentaires Ms Modifiee Avec Succés');
        this.resetFormCommMs();
        
      },
      err => {
        console.log(err);
        this.CommMstInfo.error('Commentaires Ms Non Modifiee', 'Erreur');

      }
    )
  }


  insertCommMs() {
    this.CommMsService.PostCommMs().subscribe(
      res => {
        this.CommMsListe.modalRefCommMs.hide() ;
        console.log(res);
        this.CommMsService.getCommMs();
        this.CommMsService.getCommMsActive();
        this.CommMstInfo.success('', 'Commentaires Ms Ajoutee Avec Succés');
        this.resetFormCommMs();
      },
      err => {
        console.log(err);
        this.CommMstInfo.error('Commentaires Ms Non Ajoute', 'Erreur');

      }
    )
  }

}

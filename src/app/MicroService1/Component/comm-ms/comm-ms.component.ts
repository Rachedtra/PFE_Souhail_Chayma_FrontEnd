import { Component, OnInit } from '@angular/core';
import { CommMsService } from 'src/app/MicroService1/Services/comm-ms.service';
import { MicroServiceService } from '../../Services/micro-service.service';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-comm-ms',
  templateUrl: './comm-ms.component.html',
  styleUrls: ['./comm-ms.component.css']
})
export class CommMsComponent implements OnInit {

  constructor(private CommMsService: CommMsService,
    private MsService:MicroServiceService,
    private CommService : CommentaireService,
    private CommMstInfo: ToastrService,) { }

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
        console.log(res);
        this.CommMsService.getCommMs();
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
        console.log(res);
        this.CommMsService.getCommMs();
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

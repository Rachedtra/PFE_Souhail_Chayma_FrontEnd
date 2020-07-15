import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
import { DemandeInfoService } from '../../ServicesMS2/demande-info.service';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  constructor( private CommService: CommentaireService,
    private notifComm: ToastrService,
    private InfoetServie:DemandeInfoService,
    private MsService : MicroServiceService,
    public modalCommRef:BsModalRef
    ) { }


    ngOnInit() {
   this.InfoetServie.GetInfo() ; 
   this.MsService.refreshList() ;
    }
    ResetComm() {
      this.CommService.form.setValue({
        idComm: "00000000-0000-0000-0000-000000000000",
        description: "",
        date:  new Date(),
        fkInfo:"",
        // commVotes:"",
        // commDemandeInfos:"",
         fkMs:"",
        descriptionInfo : "",
        isActiveComm : true,
        labelMs:"",
        fkUser:"",
        firstName:"",
        lastName:"",


    });
  }
  onSubmitComm ()
{
  if (this.CommService.form.controls.idComm.value == "00000000-0000-0000-0000-000000000000")
  this.insertComm();
else
  this.UpdateComm();
}
UpdateComm() {
    this.CommService.PutCommentaires().subscribe(
      res => {
        console.log(res);
        this.CommService.CommentairesAcrive();
        this.CommService.GetCommentaires();
       this.modalCommRef.hide() ;
        this.notifComm.info('', 'Commentaires Modifiee Avec Succés');
        this.ResetComm();
      },
      err => {
        console.log(err);
        this.notifComm.error('Commentaires Non Modifiee', 'Erreur');

      }
    )
  }


  insertComm() {
    this.CommService.PostCommentaires().subscribe(
      res => {
        console.log(res);
        this.CommService.CommentairesAcrive();
        this.CommService.GetCommentaires();
        this.modalCommRef.hide() ;

        this.notifComm.success('', 'Commentaires Ajoutee Avec Succés');
        this.ResetComm();
      },
      err => {
        console.log(err);
        this.notifComm.error('Commentaires Non Ajoute', 'Erreur');

      }
    )
  }

}

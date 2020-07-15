import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentaireService } from 'src/app/MicroService2/ServicesMS2/commentaire.service';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { CommMs } from 'src/app/MicroService1/Models/CommMs.models';
import { CommMsService } from 'src/app/MicroService1/Services/comm-ms.service';
@Component({
  selector: 'app-commentaires-ms',
  templateUrl: './commentaires-ms.component.html',
  styleUrls: ['./commentaires-ms.component.css']
})
export class CommentairesMsComponent implements OnInit {

  postid : string ; 
  constructor(   private notifComm: ToastrService,
    private CommService : CommentaireService ,
    private CommMsService : CommMsService,
    private msService:MicroServiceService) { }

  ngOnInit() {
    this.ResetComm() ; 
    this.resetFormCommMs() ;  
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
resetFormCommMs() {
  this.CommMsService.form.setValue({
    idCommMs: "00000000-0000-0000-0000-000000000000",
    idMs: "",
    idComm: "",
    isActiveCommMs: true,
    labelMs: "",
   
}); 
}

onSubmitComm ()
{
  if (this.CommService.form.controls.idComm.value == "00000000-0000-0000-0000-000000000000"
   )
  this.CommService.PostCommentairesMs();
  this.ResetComm() ; 
}


// insertComm() {
//   this.CommService.PostCommentairesMs().subscribe(
//     res => {
      
//       console.log(res);
//        this.CommMsService.form.setValue({
//          idCommMs: "00000000-0000-0000-0000-000000000000",
//          idMs: this.msService.idMicroService,
//          idComm: res ,
//          isActiveCommMs: true,
//          labelMs: "",
//      }); 
//      this.CommMsService.PostCommMs().subscribe(
//       res1=>{
//      console.log(res1) ;
//      this.CommMsService.getCommMsFiltre(this.msService.idMicroService);
//       });
      
//       this.notifComm.success('', 'Commentaires Ajoutee Avec Succés');
//       this.ResetComm();
//     },
   
//     err => {
//       console.log(err);
//       this.notifComm.error('Commentaires Non Ajoute', 'Erreur');

//     }
//   )
 
// }


}

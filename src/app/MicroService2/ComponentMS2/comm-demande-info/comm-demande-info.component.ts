import { Component, OnInit } from '@angular/core';
import { DemandeInfoService } from '../../ServicesMS2/demande-info.service';
import { CommentaireService } from '../../ServicesMS2/commentaire.service';
import { ToastrService } from 'ngx-toastr';
import { CommDemandeInfoService } from '../../ServicesMS2/comm-demande-info.service';

@Component({
  selector: 'app-comm-demande-info',
  templateUrl: './comm-demande-info.component.html',
  styleUrls: ['./comm-demande-info.component.css']
})
export class CommDemandeInfoComponent implements OnInit {

  constructor(private CommInfoService: CommDemandeInfoService,
    private CommInfoInfo: ToastrService,
    private CommService:CommentaireService,
    private InfoetServie : DemandeInfoService
  
    ) { }

  ngOnInit() {
    this.CommService.GetCommentaires() ; 
     this.InfoetServie.GetInfo() ; 
  }

  resetFormCommInfo() {
    this.CommInfoService.form.setValue({
      idCommInfo: "00000000-0000-0000-0000-000000000000",
      idComm: "",
      idDemandeInfo: "",
      isActiveCommInfo: true,
      descriptionComm: "",
      descriptionInfo: "",
  }); 
}
onSubmitCi ()
{
  if (this.CommInfoService.form.controls.idCommInfo.value == "00000000-0000-0000-0000-000000000000")
  this.insertCi();
else
  this.UpdateCi();
}
UpdateCi() {
    this.CommInfoService.PutCommInfo().subscribe(
      res => {
        console.log(res);
        this.CommInfoService.getCommInfo();
        this.CommInfoInfo.info('', 'Commentaire Demande Information  Modifiee Avec Succés');
        this.resetFormCommInfo();
      },
      err => {
        console.log(err);
        this.CommInfoInfo.error('Commentaire Demande Information Non Modifiee', 'Erreur');

      }
    )
  }


  insertCi() {
    this.CommInfoService.PostCommInfo().subscribe(
      res => {
        console.log(res);
        this.CommInfoService.getCommInfo();
        this.CommInfoInfo.success('', 'Commenatire Demande Information  Ajoutee Avec Succés');
        this.resetFormCommInfo();
      },
      err => {
        console.log(err);
        this.CommInfoInfo.error('Categorie Demande Information  Non Ajoute', 'Erreur');

      }
    )
  }

}

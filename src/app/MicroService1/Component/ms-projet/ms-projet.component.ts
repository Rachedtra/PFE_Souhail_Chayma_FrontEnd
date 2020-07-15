import { Component, OnInit } from '@angular/core';
import { MsProjetService } from '../../Services/ms-projet.service';
import { ToastrService } from 'ngx-toastr';
import { MicroServiceService } from '../../Services/micro-service.service';
import { ProjetService } from '../../Services/projet.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ms-projet',
  templateUrl: './ms-projet.component.html',
  styleUrls: ['./ms-projet.component.css']
})
export class MsProjetComponent implements OnInit {

  constructor(private msprojetService: MsProjetService,
    private MsProjetInfo: ToastrService,
    private MsService:MicroServiceService,
    private projetServie : ProjetService,
    public modalRefMsProjet : BsModalRef
  
    ) { }

  ngOnInit() {
    this.MsService.ListActive() ; 
    this.projetServie.refreshList() ;
  }

  resetFormMsprojet() {
    this.msprojetService.form.setValue({
      idMsProjet: "00000000-0000-0000-0000-000000000000",
      idMs: "",
      idProjet: "",
      isActiveMsVer: true,
      labelMS: "",
      nomProjet: "",
  }); 
}


onSubmitMp ()
{
  if (this.msprojetService.form.controls.idMsProjet.value == "00000000-0000-0000-0000-000000000000")
  this.insertMp();
else
  this.UpdateMp();
}
UpdateMp() {
    this.msprojetService.PutMsProjet().subscribe(
      res => {
        console.log(res);
        this.msprojetService.getMsProjet();
        this.msprojetService.MsProjetActive();
        this.modalRefMsProjet.hide() ;
        this.MsProjetInfo.info('', 'MS Projet Modifiee Avec Succés');
        this.resetFormMsprojet();
      },
      err => {
        console.log(err);
        this.MsProjetInfo.error('MS Projet Non Modifiee', 'Erreur');

      }
    )
  }


  insertMp() {
    this.msprojetService.PostMsProjet().subscribe(
      res => {
        console.log(res);
        this.msprojetService.getMsProjet();
        this.msprojetService.MsProjetActive();
        this.modalRefMsProjet.hide() ;
        this.MsProjetInfo.success('', 'MS Projet Ajoutee Avec Succés');
        this.resetFormMsprojet();
      },
      err => {
        console.log(err);
        this.MsProjetInfo.error('MS Projet Non Ajoute', 'Erreur');

      }
    )
  }

}

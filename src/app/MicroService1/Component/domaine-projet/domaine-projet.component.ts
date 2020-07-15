import { Component, OnInit } from '@angular/core';
import { DomaineProjetService } from '../../Services/domaine-projet.service';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from '../../Services/domaine.service';
import { ProjetService } from '../../Services/projet.service';
import {  BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-domaine-projet',
  templateUrl: './domaine-projet.component.html',
  styleUrls: ['./domaine-projet.component.css']
})
export class DomaineProjetComponent implements OnInit {

  constructor(private domprojetService: DomaineProjetService,
    private DomProjetInfo: ToastrService,
    private domService:DomaineService,
    private projetServie : ProjetService,
    public modalRefDomProjet : BsModalRef
    ) { }

  ngOnInit() {

    this.domService.refreshList() ; 
     this.projetServie.refreshList() ; 

  }

  resetFormDomprojet() {
    this.domprojetService.form.setValue({
      idDomainProjet: "00000000-0000-0000-0000-000000000000",
      idDomain: "",
      idProjet: "",
      isActiveDomPro: true,
      nomDomaine: "",
      nomProjet: "",
  }); 
}
onSubmitDp ()
{
  if (this.domprojetService.form.controls.idDomainProjet.value == "00000000-0000-0000-0000-000000000000")
  this.insertDp();
else
  this.UpdateDp();
}
UpdateDp() {
    this.domprojetService.PutDomProjet().subscribe(
      res => {
        console.log(res);
        this.domprojetService.getDomProjet();
        this.domprojetService.ListActiveDomProjet();
        this.modalRefDomProjet.hide() ;
        this.DomProjetInfo.info('', 'Domaine Projet Modifiee Avec Succés');
        this.resetFormDomprojet();
      },
      err => {
        console.log(err);
        this.DomProjetInfo.error('Domaine Projet Non Modifiee', 'Erreur');

      }
    )
  }


  insertDp() {
    this.domprojetService.PostDomProjet().subscribe(
      res => {
        console.log(res);
        this.domprojetService.getDomProjet();
        this.domprojetService.ListActiveDomProjet();
        this.modalRefDomProjet.hide() ;
        this.DomProjetInfo.success('', 'Domaine Projet Ajoutee Avec Succés');
        this.resetFormDomprojet();
      },
      err => {
        console.log(err);
        this.DomProjetInfo.error('Domaine Projet Non Ajoute', 'Erreur');

      }
    )
  }

}

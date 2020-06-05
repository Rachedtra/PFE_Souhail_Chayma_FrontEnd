import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../Services/projet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor( private projetService: ProjetService,
    private toaster: ToastrService) { }

  ngOnInit() {
  }


  resetForme() {
    this.projetService.pj.setValue({
      idProjet: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      domainProjets: "",
      msprojet: "",
      isActiveProjet : true ,

  });
  }


  SubmitProjet ()
  {
    if (this.projetService.pj.controls.idProjet.value == "00000000-0000-0000-0000-000000000000")
    this.insertProjet();
  else
    this.UpdateProjet();
  }
  insertProjet() {
    this.projetService.PostProjet().subscribe(
      res => {
        console.log(res);
        this.projetService.refreshList();
        this.projetService.ProjetActive() ; 

        this.toaster.success('', 'Projet Ajoutee Avec Succés');
        this.resetForme();
      },
      err => {
        console.log(err);
        this.toaster.error('Projet Non Ajoute', 'Erreur');
  
      }
    )
  }
  UpdateProjet() {
    this.projetService.PutProjet().subscribe(
      res => {
        console.log(res);
        this.projetService.refreshList();
        this.projetService.ProjetActive() ; 

        this.toaster.info('', 'Projet Modifiee Avec Succés');
        this.resetForme();
      },
      err => {
        console.log(err);
        this.toaster.error('Projet Non Modifiee', 'Erreur');

      }
    )
  }
  }


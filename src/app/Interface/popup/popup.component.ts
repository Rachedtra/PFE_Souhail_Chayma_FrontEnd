import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { CatDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/cat-demande-info.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  group: FormGroup = new FormGroup({
    nomMethode: new FormControl(""),
    labelCat: new FormControl(""),
    nomDom: new FormControl(""),
    desInfo: new FormControl(""),
    titre: new FormControl(""),
   
  });
  constructor(
    private domService : DomaineService,
    private CatService : CategorieService,
    private InfoService :DemandeInfoService,
    private notifInfo: ToastrService,
   private CatInfoService : CatDemandeInfoService

  ) { }

  ngOnInit() {
    this.domService.refreshList();
    this.CatService.GetCat() ;
    this.InfoService.GetInfo() ; 
    this.ResetInfo() ; 
    this.resetFormCatInfo() ; 
  }

  resetFormCatInfo() {
    this.CatInfoService.form.setValue({
      idCatDemande: "00000000-0000-0000-0000-000000000000",
      idCat: "",
      idDemandeInfo: "",
      isActiveCatInfo: true,
      labelCat: "",
      descriptionInfo: "",
      titreInfo : "",
      
  }); 
}
  ResetInfo() {
    this.InfoService.form.setValue({
      idDemandeInfo: "00000000-0000-0000-0000-000000000000",
      description: "",
      date: new Date(),
      commDemandeInfos: "",
      catDemandeInfos: "",
      isActiveInfo : true ,
      domaineNom : "",
      titre : "" ,
     

  });
}
  onSubmitInfo ()
  {
    if (this.InfoService.form.controls.idDemandeInfo.value == "00000000-0000-0000-0000-000000000000"&&
    this.CatInfoService.form.controls.idCatDemande.value == "00000000-0000-0000-0000-000000000000" )
    this.insertInfo();
  }
  insertInfo() {
    this.InfoService.PostInfo().subscribe(
      res1 => {
        console.log(res1);
        this.InfoService.GetInfo();
        this.notifInfo.success('', 'Demande Info Ajoutee Avec Succés');
        this.CatInfoService.PostCatInfo().subscribe(
          res => {
            console.log(res);
            this.CatInfoService.getCatInfo();
            this.notifInfo.success('', 'Categorie Demande Information  Ajoutee Avec Succés');
          },
          err => {
            console.log(err);
            this.notifInfo.error('Categorie Demande Information  Non Ajoute', 'Erreur');
    
          }
        )
        this.ResetInfo();
                },
      err => {
        console.log(err);
       
        this.notifInfo.error('Demande Info Non Ajoute', 'Erreur');
        

      }
      
    )

  }


}

import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { CategorieService } from 'src/app/MicroService2/ServicesMS2/categorie.service';
import { DemandeInfoService } from 'src/app/MicroService2/ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { CatDemandeInfoService } from 'src/app/MicroService2/ServicesMS2/cat-demande-info.service';
import { HttpClient } from '@angular/common/http';
import { DemandeInformation } from 'src/app/MicroService2/ModelsMS2/demandeInfo.models';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

 
  info: DemandeInformation[];
  catego : string ; 
  ok : boolean ; 
  obj: string;
  constructor(
    private domService : DomaineService,
    private CatService : CategorieService,
    private InfoService :DemandeInfoService,
    private notifInfo: ToastrService,
   private CatInfoService : CatDemandeInfoService,
   private _http : HttpClient

  ) { }

  ngOnInit() {
    this.domService.DomaineActive();
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

getcategoire(id)
{
  this.catego=id ; 
  console.log(this.catego) ; 
}
  onSubmitInfo ()
  {
    if (this.InfoService.form.controls.idDemandeInfo.value == "00000000-0000-0000-0000-000000000000" &&
    this.CatInfoService.form.controls.idCatDemande.value == "00000000-0000-0000-0000-000000000000")
    {this.InfoService.insertInfo() ;
      this.insertCat() ;
     }
    
  }
 
  insertCat(){   
    this.CatInfoService.form.setValue({
      idCatDemande: "00000000-0000-0000-0000-000000000000",
       idCat: this.catego ,
       idDemandeInfo:  this.InfoService.last ,
       isActiveCatInfo: true,
       labelCat: "",
       descriptionInfo: "",
       titreInfo : "",
     });
   this.CatInfoService.PostCatInfo().subscribe(
    res => {
      console.log(res);
      this.CatInfoService.getCatInfo();
      this.notifInfo.success('', 'Categorie Demande Information  Ajoutee Avec Succés');
      
    },
  
    err => {
      console.log(err);
      this.CatInfoService.getCatInfo();
      this.notifInfo.error('Categorie Demande Information  Non Ajoute', 'Erreur');
  
    }
  )
  ;
    }
  


  }
  


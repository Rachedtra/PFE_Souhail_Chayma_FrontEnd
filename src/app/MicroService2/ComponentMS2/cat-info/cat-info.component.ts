import { Component, OnInit } from '@angular/core';
import { CatDemandeInfoService } from '../../ServicesMS2/cat-demande-info.service';
import { DemandeInfoService } from '../../ServicesMS2/demande-info.service';
import { CategorieService } from '../../ServicesMS2/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';

@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.css']
})
export class CatInfoComponent implements OnInit {

  constructor(private CatInfoService: CatDemandeInfoService,
    private CatService:CategorieService,
    private InfoetServie : DemandeInfoService,
    private CatInfoInfo: ToastrService,
    private domService : DomaineService

  
    ) { }

  ngOnInit() {
    this.CatService.GetCat() ; 
     this.InfoetServie.GetInfo() ;
     this.domService.refreshList() ;
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
onSubmitCi ()
{
  if (this.CatInfoService.form.controls.idCatDemande.value == "00000000-0000-0000-0000-000000000000")
  this.insertCi();
else
  this.UpdateCi();
}
UpdateCi() {
    this.CatInfoService.PutCatInfo().subscribe(
      res => {
        console.log(res);
        this.CatInfoService.CategorieInfoActive() ;
        this.CatInfoService.getCatInfo();     
        this.CatInfoInfo.info('', 'Categorie Demande Information  Modifiee Avec Succés');
        this.resetFormCatInfo();
      },
      err => {
        console.log(err);
        this.CatInfoInfo.error('Categorie Demande Information Non Modifiee', 'Erreur');

      }
    )
  }


  insertCi() {
    this.CatInfoService.PostCatInfo().subscribe(
      res => {
        console.log(res);
        this.CatInfoService.CategorieInfoActive() ;
        this.CatInfoService.getCatInfo();
        this.CatInfoInfo.success('', 'Categorie Demande Information  Ajoutee Avec Succés');
        this.resetFormCatInfo();
      },
      err => {
        console.log(err);
        this.CatInfoService.getCatInfo();
        this.CatInfoInfo.error('Categorie Demande Information  Non Ajoute', 'Erreur');

      }
    )
  }
}

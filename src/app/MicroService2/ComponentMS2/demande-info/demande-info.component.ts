import { Component, OnInit } from '@angular/core';
import { DemandeInfoService } from '../../ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../../ServicesMS2/categorie.service';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-demande-info',
  templateUrl: './demande-info.component.html',
  styleUrls: ['./demande-info.component.css']
})
export class DemandeInfoComponent implements OnInit {
  constructor( private InfoService: DemandeInfoService,
    private notifInfo: ToastrService,
    private CatService : CategorieService,
    private domService : DomaineService , 
    public modalInfoRef : BsModalRef
    
    ) { }


    ngOnInit() {
   this.CatService.GetCat() ; 

   this.domService.refreshList() ; 
    }
    ResetInfo() {
      this.InfoService.form.setValue({
        idDemandeInfo: "00000000-0000-0000-0000-000000000000",
        description: "",
        date: new Date(),
        // commDemandeInfos: "",
        // catDemandeInfos: "",
        isActiveInfo : true ,
        domaineNom : "",
        titre : "" ,
        idDomain:"",
        fkUser:"",
        firstName:"",
        lastName:"",

 
    });
  }

  onSubmitInfo ()
{
  if (this.InfoService.form.controls.idDemandeInfo.value == "00000000-0000-0000-0000-000000000000")
  this.insertInfo();
else
  this.UpdateInfo();
}
UpdateInfo() {
    this.InfoService.PutInfo().subscribe(
      res => {
        console.log(res);
        this.InfoService.DemandeInfoActive() ;

        this.InfoService.GetInfo();
        this.modalInfoRef.hide() ;

        this.notifInfo.info('', 'Demande Info Modifiee Avec Succés');
        this.ResetInfo();
      },
      err => {
        console.log(err);
        this.notifInfo.error('Demande Info Non Modifiee', 'Erreur');

      }
    )
  }

  insertInfo(){
    this.InfoService.PostInfo().subscribe(
      res => { 
        this.InfoService.DemandeInfoActive() ;
        this.InfoService.GetInfo();
        console.log(res);  
        this.modalInfoRef.hide() ;
        this.notifInfo.success('', 'Demande Info Ajoutee Avec Succés');
        this.ResetInfo();     
      },
  
      err => {
        console.log(err);
        this.notifInfo.error('Demande Info Non Ajoute', 'Erreur');
      }
    ); 
  }
  
  // insertInfo() {
  //   this.InfoService.PostInfo().subscribe(
  //     res => {
  //       console.log(res);
  //       this.InfoService.GetInfo();
  //       this.notifInfo.success('', 'Demande Info Ajoutee Avec Succés');
  //       this.ResetInfo();
  //     },
  //     err => {
  //       console.log(err);
  //       this.notifInfo.error('Demande Info Non Ajoute', 'Erreur');

  //     }
  //   )

      


  // }

}

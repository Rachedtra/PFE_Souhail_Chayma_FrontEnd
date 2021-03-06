import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../ServicesMS2/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor( private categorieService: CategorieService,
    private notif: ToastrService,
    public modalCatRef:BsModalRef
    ) { }

  ngOnInit() {
  }

  ResetCat() {
    this.categorieService.form.setValue({
      idCat: "00000000-0000-0000-0000-000000000000",
      label: "",
      catDemandeInfos: "",
      sousCategories :"",
      isActiveCat : true ,

  });
}


onSubmitCat ()
{
  if (this.categorieService.form.controls.idCat.value == "00000000-0000-0000-0000-000000000000")
  this.insertCategorie();
else
  this.UpdateCategorie();
}
UpdateCategorie() {
    this.categorieService.PutCat().subscribe(
      res => {
        console.log(res);
        this.categorieService.CategorieActive() ;

        this.categorieService.GetCat();
        this.modalCatRef.hide();

        this.notif.info('', 'Categorie Modifiee Avec Succés');
        this.ResetCat();
      },
      err => {
        console.log(err);
        this.notif.error('Categorie Non Modifiee', 'Erreur');

      }
    )
  }


  insertCategorie() {
    this.categorieService.PostCat().subscribe(
      res => {
        console.log(res);
        this.categorieService.CategorieActive() ;
        this.categorieService.GetCat();
        this.modalCatRef.hide();

        this.notif.success('', 'Categorie Ajoutee Avec Succés');
        this.ResetCat();
      },
      err => {
        console.log(err);
        this.notif.error('Categorie Non Ajoute', 'Erreur');

      }
    )
  }


}

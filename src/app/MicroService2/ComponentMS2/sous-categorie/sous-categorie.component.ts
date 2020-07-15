import { Component, OnInit } from '@angular/core';
import { SousCategorieService } from '../../ServicesMS2/sous-categorie.service';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../../ServicesMS2/categorie.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent implements OnInit {

  constructor( private SousCatoService: SousCategorieService,
    private notifSousCat: ToastrService,
    private catService : CategorieService,
    public modalSousCatRef:BsModalRef
   
    
    ) { }


    ngOnInit() {
      this.catService.GetCat() ; 

    }
    ResetSousCat() {
      this.SousCatoService.form.setValue({
        idSousCate: "00000000-0000-0000-0000-000000000000",
        label: "",
        catFK: "",
        isActiveSousCat : true,
        catLabel : ""


        
    });
  }

  onSubmitSousCat ()
{
  if (this.SousCatoService.form.controls.idSousCate.value == "00000000-0000-0000-0000-000000000000")
  this.insertSousCat();
else
  this.UpdateSousCat();
}
UpdateSousCat() {
    this.SousCatoService.PutSousCat().subscribe(
      res => {
        console.log(res);
        this.SousCatoService.SousCategorieActive();
        this.SousCatoService.GetSousCat();
        this.modalSousCatRef.hide();
        this.notifSousCat.info('', 'Sous Categorie Modifiee Avec Succés');
        this.ResetSousCat();
      },
      err => {
        console.log(err);
        this.notifSousCat.error('Sous Categorie Non Modifiee', 'Erreur');

      }
    )
  }


  insertSousCat() {
    this.SousCatoService.PostSousCat().subscribe(
      res => {
        console.log(res);
        this.SousCatoService.SousCategorieActive();
        this.SousCatoService.GetSousCat();
        this.modalSousCatRef.hide();
        this.notifSousCat.success('', 'Sous Categorie Ajoutee Avec Succés');
        this.ResetSousCat();
      },
      err => {
        console.log(err);
        this.notifSousCat.error('Sous Categorie Non Ajoute', 'Erreur');

      }
    )
  }
}

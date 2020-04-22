import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/MicroService2/Services2/Categorie.service';
import { Categorie } from 'src/app/MicroService2/Models2/Categorie.Models2';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  Cat: Categorie[] = new Array();

  constructor(private Catservice: CategorieService) { }

  ngOnInit() {
    this.Catservice.refreshList();
    this.resetForm();
  }

  resetForm() {
    this.Catservice.form.setValue({
      idCat: "00000000-0000-0000-0000-000000000000",
      label: "",
      catDemandeInfos: "",
      sousCategories: "",

    });
  }

  DeleteCat(idCat: string) {
    this.Catservice.DeleteCat(idCat).subscribe(res => {
      console.log(res);
      this.Catservice.refreshList();
    })

  }

  EditCat(Categorie) {
    this.Catservice.form.setValue(Categorie);

  }

}

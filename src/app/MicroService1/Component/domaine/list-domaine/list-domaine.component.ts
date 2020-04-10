import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/MicroService1/Services/domaine.service';
import { Domaine } from 'src/app/MicroService1/Models/Domaine.models';

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {
  Dom: Domaine[] = new Array();

  constructor(private Domservice: DomaineService) { }

  ngOnInit() {

    this.Domservice.refreshList();
    this.resetForm();
  }

  resetForm() {
    this.Domservice.form.setValue({
      idDomain: "00000000-0000-0000-0000-000000000000",
      nom: "",
      domainProjets: "",

    });
  }



  DeleteDom(idDomaine: string) {
    this.Domservice.DeleteDom(idDomaine).subscribe(res => {
      console.log(res);
      this.Domservice.refreshList();
    })

  }


  EditDom(domaine) {
    this.Domservice.form.setValue(domaine);

    // this.langservice.DeleteLang(language.idLanguage).subscribe(res => {
    //   console.log(res);
    //   this.GetLang();
    //})


  }

}




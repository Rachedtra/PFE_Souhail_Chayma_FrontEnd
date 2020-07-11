import { Component, OnInit } from '@angular/core';
import { MicroServiceService } from '../../Services/micro-service.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesService } from '../../Services/languages.service';
import { Languages } from '../../Models/Languages.models';




@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.css']
})
export class MsComponent implements OnInit {
  lang: Languages[] = new Array();


  constructor( private msService: MicroServiceService,
    private toastrService: ToastrService,
    private langservice: LanguagesService,
    
    ) { }

  ngOnInit() {
    this.langservice.refreshList() ; 

  }



  resetForm() {
    this.msService.form.setValue({
      idMs: "00000000-0000-0000-0000-000000000000",
      label: "",
      description: "",
      author: "",
      lien: "",
      diagClass: "",
      languagesFK: "00000000-0000-0000-0000-000000000000",
     // msprojet: "",
      // methodes: "",
      // languages :"",
      isActiveMs : true ,
      languageLabel : ""


  });

 
}


onSubmit ()
{
  if (this.msService.form.controls.idMs.value == "00000000-0000-0000-0000-000000000000")
  this.insertRecord();
else
  this.UpdateRecord();
}
  UpdateRecord() {
    this.msService.PutMs().subscribe(
      res => {
        console.log(res);
        this.msService.refreshList();
        this.msService.ListActive();

        this.toastrService.info('', 'Micro Service Modifiee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Micro Service Non Modifiee', 'Erreur');

      }
    )
  }


  insertRecord() {
    this.msService.PostMs().subscribe(
      res => {

        console.log(res);
        this.msService.refreshList();
        this.msService.ListActive();

        this.toastrService.success('', 'Micro Service Ajoutee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Microservice Non Ajoute', 'Erreur');

      }
    )
  }
}

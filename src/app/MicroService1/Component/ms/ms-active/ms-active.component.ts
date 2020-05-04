import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/MicroService1/Models/Languages.models';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';

@Component({
  selector: 'app-ms-active',
  templateUrl: './ms-active.component.html',
  styleUrls: ['./ms-active.component.css']
})
export class MsActiveComponent implements OnInit {
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
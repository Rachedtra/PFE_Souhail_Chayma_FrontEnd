import { Component, OnInit } from '@angular/core';
import { VersionsService } from 'src/app/MicroService1/Services/versions.service';
import { Versionss } from 'src/app/MicroService1/Models/Versionss.models';

@Component({
  selector: 'app-list-versions',
  templateUrl: './list-versions.component.html',
  styleUrls: ['./list-versions.component.css']
})
export class ListVersionsComponent implements OnInit {
  Ver: Versionss[] = new Array();

  constructor(private Verservice: VersionsService) { }

  ngOnInit() {

    this.Verservice.refreshList();
    this.resetForm();
  }

  resetForm() {
    this.Verservice.form.setValue({
      idVersion: "00000000-0000-0000-0000-000000000000",
      numero: "",
      VersionLanguages: "",

    });
  }

  DeleteVer(idVersion: string) {
    this.Verservice.DeleteVer(idVersion).subscribe(res => {
      console.log(res);
      this.Verservice.refreshList();
    })

  }

  EditVer(versions) {
    this.Verservice.form.setValue(versions);

    // this.langservice.DeleteLang(language.idLanguage).subscribe(res => {
    //   console.log(res);
    //   this.GetLang();
    //})


  }


}

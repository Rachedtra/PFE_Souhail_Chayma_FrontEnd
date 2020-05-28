import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../Services/languages.service';
import { ToastrService } from 'ngx-toastr';
import { VersionLanguageService } from '../../Services/version-language.service';
import { VersionsService } from '../../Services/versions.service';

@Component({
  selector: 'app-version-language',
  templateUrl: './version-language.component.html',
  styleUrls: ['./version-language.component.css']
})
export class VersionLanguageComponent implements OnInit {

  constructor( private VerLangService: VersionLanguageService,
    private verlangInfo: ToastrService,
    private langservice: LanguagesService,
    private verService : VersionsService

    ) { }


  ngOnInit() {
    this.verService.refreshList() ;
    this.langservice.refreshList() ; 
  }

  resetFormVerLang() {
    this.VerLangService.form.setValue({
      idVl: "00000000-0000-0000-0000-000000000000",
      idVersion: "",
      idLanguage: "",
      isActiveVerLang: true,
      numeroVersion: "",
      labelLanguage: "",
  });

  
}
onSubmitVl ()
{
  if (this.VerLangService.form.controls.idVl.value == "00000000-0000-0000-0000-000000000000")
  this.insertVl();
else
  this.UpdateVl();
}
UpdateVl() {
    this.VerLangService.PutVerLang().subscribe(
      res => {
        console.log(res);
        this.VerLangService.getVerLang();
        this.verlangInfo.info('', 'Version Language Modifiee Avec Succés');
        this.resetFormVerLang();
      },
      err => {
        console.log(err);
        this.verlangInfo.error('Version Language Non Modifiee', 'Erreur');

      }
    )
  }


  insertVl() {
    this.VerLangService.PostVerLang().subscribe(
      res => {
        console.log(res);
        this.VerLangService.getVerLang();
        this.verlangInfo.success('', 'Version Language Ajoutee Avec Succés');
        this.resetFormVerLang();
      },
      err => {
        console.log(err);
        this.verlangInfo.error('Version Language Non Ajoute', 'Erreur');

      }
    )
  }
}

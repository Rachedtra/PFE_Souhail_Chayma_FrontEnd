import { Component, OnInit, TemplateRef } from '@angular/core';
import { VersionLanguageComponent } from '../version-language.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VersionLanguageService } from 'src/app/MicroService1/Services/version-language.service';
import { ToastrService } from 'ngx-toastr';
import { LanguagesService } from 'src/app/MicroService1/Services/languages.service';
import { VersionsService } from 'src/app/MicroService1/Services/versions.service';

@Component({
  selector: 'app-list-ver-lang-active',
  templateUrl: './list-ver-lang-active.component.html',
  styleUrls: ['./list-ver-lang-active.component.css']
})
export class ListVerLangActiveComponent implements OnInit {

  modalRefVerLang: BsModalRef;
  VerLangFilterActive: any = { labelLanguage: '' };



  constructor(private VerLangService: VersionLanguageService,
    private modalVerLang: BsModalService,
    private VerLangInfo: ToastrService,
    private langService:LanguagesService,
    private verService : VersionsService
  
    ) { }

  ngOnInit() {
    this.VerLangService.VersionLanguageActive();
    this.langService.refreshList() ; 
     this.verService.refreshList() ; 
    this.resetFormVerLang();
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

DeleteVl(idVl: string) {
  this.VerLangService.DeleteVerLang(idVl).subscribe(res => {
    console.log(res);
    this.VerLangService.getVerLang();
  })

}

openModalVl(templatee: TemplateRef<VersionLanguageComponent>) {
  this.modalRefVerLang = this.modalVerLang.show(templatee);


}

ConfirmModalVl(template: TemplateRef<VersionLanguageComponent>) {
  this.modalRefVerLang = this.modalVerLang.show(template, { class: 'modal-sm' });
}

confirmVl(): void {

  this.modalRefVerLang.hide();
  this.VerLangInfo.success('', 'Version Language Supprimee Avec Succés');
}

declineVl(): void {

  this.modalRefVerLang.hide();
  this.VerLangInfo.warning('', 'Version Language Non Supprimee');
}

EditVl(ms,  templatee: TemplateRef<VersionLanguageComponent>) {
  this.VerLangService.form.setValue(ms);
  this.modalRefVerLang = this.modalVerLang.show(templatee);


}
AddVl(templatee: TemplateRef<VersionLanguageComponent>) {
  this.resetFormVerLang();
  this.modalRefVerLang = this.modalVerLang.show(templatee);

}

}

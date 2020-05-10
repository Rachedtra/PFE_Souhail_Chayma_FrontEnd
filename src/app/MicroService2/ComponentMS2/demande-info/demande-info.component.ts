import { Component, OnInit } from '@angular/core';
import { DemandeInfoService } from '../../ServicesMS2/demande-info.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demande-info',
  templateUrl: './demande-info.component.html',
  styleUrls: ['./demande-info.component.css']
})
export class DemandeInfoComponent implements OnInit {
  constructor( private InfoService: DemandeInfoService,
    private notifInfo: ToastrService,
    
    
    ) { }


    ngOnInit() {
   
    }
    ResetInfo() {
      this.InfoService.form.setValue({
        idDemandeInfo: "00000000-0000-0000-0000-000000000000",
        description: "",
        date: "",
        commDemandeInfos: "",
        catDemandeInfos: "",
        isActiveInfo : true 
 
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
        this.InfoService.GetInfo();
        this.notifInfo.info('', 'Demande Info Modifiee Avec Succés');
        this.ResetInfo();
      },
      err => {
        console.log(err);
        this.notifInfo.error('Demande Info Non Modifiee', 'Erreur');

      }
    )
  }


  insertInfo() {
    this.InfoService.PostInfo().subscribe(
      res => {
        console.log(res);
        this.InfoService.GetInfo();
        this.notifInfo.success('', 'Demande Info Ajoutee Avec Succés');
        this.ResetInfo();
      },
      err => {
        console.log(err);
        this.notifInfo.error('Demande Info Non Ajoute', 'Erreur');

      }
    )
  }
}

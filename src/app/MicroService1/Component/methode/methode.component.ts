import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MethodeService } from '../../Services/methode.service';
import { MicroServiceService } from '../../Services/micro-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
  styleUrls: ['./methode.component.css']
})
export class MethodeComponent implements OnInit {

  constructor( private mService: MethodeService,
    private toastrService: ToastrService,
    private msService: MicroServiceService,
    public bsModalRef : BsModalRef,
    private bsmodalService : BsModalService) { }

  ngOnInit() {
    this.msService.refreshList() ; 
  }
  resetForm() {
    this.mService.form.setValue({
      idMethode: "00000000-0000-0000-0000-000000000000",
      nom: "",
      description: "",
      input: "",
      output: "",
      msFk: "00000000-0000-0000-0000-000000000000",
      isActiveMethode : true ,
      msLabel : "" ,

  });
  }


  onSubmit ()
{
  if (this.mService.form.controls.idMethode.value == "00000000-0000-0000-0000-000000000000")
  this.insertRecord();
else
  this.UpdateRecord();
}


insertRecord() {
  this.mService.PostMethode().subscribe(
    res => {
      console.log(res);
      this.mService.refreshList();
      this.mService.MethodeActive() ; 
      this.bsModalRef.hide() ; 
      this.toastrService.success('', 'Methode Ajoutee Avec Succés');
      this.resetForm();
    },
    err => {
      console.log(err);
      this.toastrService.error('Methode Non Ajoute', 'Erreur');

    }
  )
}

  UpdateRecord() {
    this.mService.PutMethode().subscribe(
      res => {
        console.log(res);
        this.mService.refreshList();
        this.mService.MethodeActive() ; 
        this.bsModalRef.hide() ; 
        this.toastrService.info('', 'Methode Modifiee Avec Succés');
        this.resetForm();
      },
      err => {
        console.log(err);
        this.toastrService.error('Methode Non Modifiee', 'Erreur');

      }
    )
  }



 

}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './authentification.models';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeComponent } from '../home/home.component';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'], 
})
export class AuthentificationComponent implements OnInit {
  id: string;
  first: string;
  last: String;

  constructor(private _http : HttpClient,    private modalCommMs: BsModalService,
    private home : HomeComponent,    private CommMstInfo: ToastrService,
    private authservice : AuthServiceService
    ) { }
  modalRefCommMs: BsModalRef;
  userFiltre: User[] = new Array();
  person : string ; 
 

  ngOnInit() {
    this.resetFormUser() ; 
    this.authservice.getUsers() ; 
  }

  resetFormUser() {
    this.authservice.form.setValue({
      userId: "00000000-0000-0000-0000-000000000000",
      firstName: "",
      LastName: "",
      login: "",
      password: "",
      filialID: "",
      filiale: "",
      useRoles:"",
      refreshTokens:""
  }); 


}
 

// PostUser() {

//   this.authservice.post().subscribe( res => {
//     if(res!="erreur")
//     {
     
//       this.userFiltre= this.authservice.users.filter(i=>i.userID== res ) ; 
//       console.log(this.authservice.users) ;
//        this.first=this.userFiltre[0].firstName ;
//        this.last=this.userFiltre[0].lastName ;
//       console.log(this.userFiltre) ;
//        console.log(this.first) ;
//        console.log(this.last) ;
//       this.CommMstInfo.success('', 'Bienvenue !');
//        this.home.modalRefCommMs.hide() ;
      
//     }
//     else
//     {
//       this.CommMstInfo.warning('', 'Verifier login ou mot de passe  !');

//     }
//     });
// }

submitUser()
{
  this.authservice.post() ;
  if(this.authservice.id!=null)
    this.home.modalRefCommMs.hide() ; 
}

}

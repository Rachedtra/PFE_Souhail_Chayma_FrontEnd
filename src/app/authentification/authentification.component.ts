import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './authentification.models';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'], 
})
export class AuthentificationComponent implements OnInit {
  first: any;
  last: any;

  constructor(  

    private authservice : AuthServiceService,
    public bsModalRefAuth: BsModalRef ,
    private _http : HttpClient,
    private CommMstInfo : ToastrService
    ) { }
  userFiltre: User[] = new Array();
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
post()
{
   this._http.post('http://localhost:50581/api/Users/Login', this.authservice.form.value).subscribe( res => {
    if(res==null)
    {
      this.CommMstInfo.warning('', 'Verifier login ou mot de passe  !');
    }
    else
    {
      
      localStorage.setItem('TokenPlatform',JSON.stringify(res)) ; 
        this.authservice.first=JSON.parse(localStorage.getItem('TokenPlatform')).firstName ;
       this.authservice.last=JSON.parse(localStorage.getItem('TokenPlatform')).lastName ;
      this.CommMstInfo.success('', 'Bienvenue !');   
      
      this.bsModalRefAuth.hide() ;
    }
  }); 
}
//  submitUser()
//  {
// this.authservice.post() ;

//    console.log( this.authservice.x)
//  }

}

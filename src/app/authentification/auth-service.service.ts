import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './authentification.models';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userFiltre: User[];
  first: string;
  last: String;
  id: any=null;
  home: any;
  e: Object;
x:boolean ; 
  constructor(private _http : HttpClient,
      private CommMstInfo: ToastrService,
      private router: Router
     ) { }
  users: User[] = new Array();
  form: FormGroup = new FormGroup({
    userId: new FormControl(""),
    firstName: new FormControl(""),
    LastName: new FormControl(""),
    login: new FormControl(""),
    password: new FormControl(""),
    filialID: new FormControl(""),
    filiale: new FormControl(""),
    useRoles: new FormControl(""),
    refreshTokens: new FormControl(""),
  });
  getUsers( ) {

    this._http.get('http://localhost:50581/api/Users').subscribe(res => {
      this.users = res as User[];
      console.log(this.users);
      console.log("rachedtest" + res);


    });


  }

post()
{
   this._http.post('http://localhost:50581/api/Users/Login', this.form.value).subscribe( res => {
    if(res==null)
    {
      this.CommMstInfo.warning('', 'Verifier login ou mot de passe  !');
       this.x=false  ; 
    }
    else
    {
      localStorage.setItem('TokenPlatform',JSON.stringify(res)) ; 
        this.first=JSON.parse(localStorage.getItem('TokenPlatform')).firstName ;
       this.last=JSON.parse(localStorage.getItem('TokenPlatform')).lastName ;
      this.CommMstInfo.success('', 'Bienvenue !');   
      this.x= true ; 
      this.router.navigate(["/home"])
    }
  }); 
}

logout()
{
  localStorage.removeItem('TokenPlatform') ; 
  this.router.navigate(["/home"]) ;
}
loggedIn() {
  return !!localStorage.getItem('TokenPlatform')    
}
}

import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './authentification.models';
import { HomeComponent } from '../home/home.component';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationComponent } from './authentification.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userFiltre: User[];
  first: string;
  last: String;
  id: any=null;
  home: any;
  modalRefCommMs: BsModalRef;
  e: Object;

  constructor(private _http : HttpClient,
      private CommMstInfo: ToastrService,
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
  return this._http.post('http://localhost:50581/api/Users/Login', this.form.value).subscribe( res => {
    if(res==null)
    {
      this.id=res ;
      this.CommMstInfo.warning('', 'Verifier login ou mot de passe  !');
    }
    else
    {
      this.id=res ; 
      this.userFiltre= this.users.filter(i=>i.userID== res ) ; 
      console.log(this.users) ;
       this.first=this.userFiltre[0].firstName ;
       this.last=this.userFiltre[0].lastName ;
      console.log(this.userFiltre) ;
       console.log(this.first) ;
       console.log(this.last) ;
      this.CommMstInfo.success('', 'Bienvenue !');
     
        // this.modalRefCommMs.hide() ;

    }
  }); 
}

  
}

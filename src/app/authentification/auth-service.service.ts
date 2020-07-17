import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './authentification.models';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { UseRole } from './userRole.models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userFiltre: User[];
  first: string;
  last: String;
  iduser: String;
  role :String ; 
  usersRole: UseRole[];
  userRoleFilter: UseRole[];
  constructor(private _http : HttpClient,
      private CommMstInfo: ToastrService,
      private router: Router
     ) { }
  users: User[] = new Array();
  form: FormGroup = new FormGroup({
    userID: new FormControl(""),
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
    }
    else
    {
      localStorage.setItem('TokenPlatform',JSON.stringify(res)) ; 
      this.first=JSON.parse(localStorage.getItem('TokenPlatform')).firstName ;
      this.last=JSON.parse(localStorage.getItem('TokenPlatform')).lastName ;
      this.iduser=JSON.parse(localStorage.getItem('TokenPlatform')).userID ;
      this.CommMstInfo.success('', 'Bienvenue !');   
    }
  }); 
}

logout()
{

  localStorage.removeItem('TokenPlatform') ; 
 // localStorage.removeItem('RoleUser') ; 

  this.router.navigate(["/home"]) ;

}
loggedIn() {
  return !!localStorage.getItem('TokenPlatform')    
}





// getUsersRole(id) {

//   this._http.get('http://localhost:50581/api/Users/GetUsersRole').subscribe(res => {
//     this.usersRole = res as UseRole[];
//     this.userRoleFilter= this.usersRole.filter(i=>i.userID==id ) ; 
//      localStorage.setItem('RoleUser',JSON.stringify(this.userRoleFilter)) ; 
//      console.log(this.userRoleFilter);

//     console.log(this.usersRole);
//     console.log("rachedtest" + res);

//   });


// }





}

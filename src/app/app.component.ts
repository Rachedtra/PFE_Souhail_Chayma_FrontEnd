import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TemplateProjet';
  constructor( private authservice : AuthServiceService){}

  testUser(): Boolean {
    console.log(this.authservice.role) ; 
if(this.authservice.role=="admin")
{  console.log(true);
  return true 
}
 
else
{
  console.log(false);
  return false 

}
  }

  //this.authservice.role=JSON.parse(localStorage.getItem('RoleUser')).roleLabel ;
 
}

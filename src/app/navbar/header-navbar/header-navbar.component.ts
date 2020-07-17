import { Component, OnInit } from '@angular/core';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styles: ['./header-navbar.component.css'],
  entryComponents:[AuthentificationComponent],
  providers:[AuthentificationComponent,HomeComponent]

})
export class HeaderNavbarComponent implements OnInit {

  constructor(private authService : AuthServiceService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthServiceService } from 'src/app/authentification/auth-service.service';



@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styles: []
})
export class SidebarLeftComponent implements OnInit {

  constructor(private router: Router,private authservice:AuthServiceService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }


}

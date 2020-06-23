import { Component, OnInit } from '@angular/core';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { HttpClient } from '@angular/common/http';
import { MS } from 'src/app/MicroService1/Models/MicroService.models';
import { CommMs } from 'src/app/MicroService1/Models/CommMs.models';
import { CommMsService } from 'src/app/MicroService1/Services/comm-ms.service';

@Component({
  selector: 'app-get-id-ms',
  templateUrl: './get-id-ms.component.html',
  styleUrls: ['./get-id-ms.component.css']
})
export class GetIdMsComponent implements OnInit {
  MicroServiceFiltre:any =  { label: '' };
commMs: CommMs[];
commMsFiltre: CommMs[];
  constructor( private MsService:MicroServiceService,
    private CommMs : CommMsService, 
    private _http : HttpClient ,
    ) { }
id : any ; 
  ngOnInit() {
    this.MsService.ListActive() ; 
    this.MsService.GetMsFiltrer;
    this.CommMs.getCommMsFiltre(this.id) ; 
  }



 
}

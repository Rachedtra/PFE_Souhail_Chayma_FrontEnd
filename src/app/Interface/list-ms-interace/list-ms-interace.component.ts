import { Component, OnInit } from '@angular/core';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { HttpClient } from '@angular/common/http';
import { MS } from 'src/app/MicroService1/Models/MicroService.models';

@Component({
  selector: 'app-list-ms-interace',
  templateUrl: './list-ms-interace.component.html',
  styleUrls: ['./list-ms-interace.component.css']
})
export class ListMsInteraceComponent implements OnInit {
  microActive: MS[];
  MsFiltre: MS[];

  constructor( private MsService:MicroServiceService, 
    private _http : HttpClient) { }

  ngOnInit() {
    this.MsService.ListActive() ; 

  }

  
  }
  


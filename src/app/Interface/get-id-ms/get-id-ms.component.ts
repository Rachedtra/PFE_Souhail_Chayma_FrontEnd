import { Component, OnInit } from '@angular/core';
import { MicroServiceService } from 'src/app/MicroService1/Services/micro-service.service';
import { HttpClient } from '@angular/common/http';
import { MS } from 'src/app/MicroService1/Models/MicroService.models';
import { CommMs } from 'src/app/MicroService1/Models/CommMs.models';

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
    private _http : HttpClient ) { }

  ngOnInit() {
    this.MsService.ListActive() ; 
    this.MsService.GetMsFiltrer;
  }


  getCommMsFiltre(id) {

    this._http.get('http://localhost:54735/api/CommMs').subscribe(res => {
      this.commMs = res as CommMs[];
      this.commMsFiltre= this.commMs.filter(i=>i.idMs==id ) ; 
      console.log(this.commMs);

    });
  }
}

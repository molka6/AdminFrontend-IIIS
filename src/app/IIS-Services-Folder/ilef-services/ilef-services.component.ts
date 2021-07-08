import { Component, OnInit } from '@angular/core';
import { IlefServiceService } from '../ilef-service.service'
@Component({
  selector: 'app-ilef-services',
  templateUrl: './ilef-services.component.html',
  styleUrls: ['./ilef-services.component.css']
})
export class IlefServicesComponent implements OnInit {
  ServiceListe = [];

  constructor(private ilefServiceService: IlefServiceService) { }

  ngOnInit(): void {

    this.ilefServiceService.getAllService().then((resp) => { this.ServiceListe = resp.data });
  }

}

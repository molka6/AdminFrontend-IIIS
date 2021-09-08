import { Component, OnInit } from '@angular/core';
import {CondidatureService} from '../condidature.service' ; 
@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  CandidatureListe = [];

  
  constructor(private _condidatureService:CondidatureService) { }



  ngOnInit(): void {
    this._condidatureService.getAllCandidature().then((resp) => { this.CandidatureListe = resp.data; console.log("suu"+this.CandidatureListe) });
  }

}

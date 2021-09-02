import { Component, OnInit } from '@angular/core';
import { OffreEmploiService } from '../offre-emploi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import axios from 'axios';




@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  
  offreEmploiListe: any;
  CondidateListe :any;
  

  constructor(private offreEmploiService: OffreEmploiService, private route: ActivatedRoute, private router: Router) { }

  arrayListe = []
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.offreEmploiService.getOffreCandidat(id).then((resp) => { 
      this.offreEmploiListe = resp.data;
    console.log( this.offreEmploiListe.condidature)
    let url =this.offreEmploiListe.condidature;



    console.log(url);
    
    for (let i = 0; i < url .length; i++) {
      console.log(url [i]);
      this.offreEmploiService.getAllCandidat(url [i]).then((resp) => { 

        this.CondidateListe = resp.data;
        this.arrayListe.push(this.CondidateListe)
        console.log(this.arrayListe)   ;
      });
    }
     
     });
  }







}


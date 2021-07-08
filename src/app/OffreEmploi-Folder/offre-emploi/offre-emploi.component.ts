import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreEmploiService } from '../offre-emploi.service';
// import { OffreEmploiService } from '../offre-emploi.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {
  public offreEmploiListe = [];

  // constructor() { }
  constructor(private offreEmploiService: OffreEmploiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    this.offreEmploiService.getAllOffreEmploi().then((resp) => { this.offreEmploiListe = resp.data; });
  }
  deleteOffre(element) {

    let dynamicParameter = this.OffreEmploiId(element);
   
    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.offreEmploiService.deleteOffre(dynamicParameter).then(() => {

        this.router.navigate(['/OffreEmploi'])
      }

      )
    }


  }
  OffreEmploiId(element) {

    let id: String;
    this.offreEmploiListe.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }





}

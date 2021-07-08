import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OffreEmploiService } from '../offre-emploi.service';

@Component({
  selector: 'app-create-offre-emploi',
  templateUrl: './create-offre-emploi.component.html',
  styleUrls: ['./create-offre-emploi.component.css']
})
export class CreateOffreEmploiComponent implements OnInit {
  OffreForm = new FormGroup({
    titre: new FormControl(''),
    date_ajout: new FormControl(''),
    description: new FormControl(''),

  });
  constructor(private offreEmploiService : OffreEmploiService) { }

  ngOnInit(): void {
  }
  // addOffre(e) {
  //   e.stopPropagation()
  //   {

  //     this.offreEmploiService.createOffreEmploi({
  //       titre: this.OffreForm.get('titre').value,
  //       date_ajout: this.OffreForm.get('date_ajout').value,
  //       description: this.OffreForm.get('description').value,


  //     }).then(() => {

  //       console.warn("success");
        
  //     })
  //   }

  // }
}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffreEmploiService } from '../offre-emploi.service';

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent implements OnInit {
  formOffre = new FormGroup({

    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private offreEmploiService: OffreEmploiService, private router: Router) { }

  ngOnInit(): void {
  }
  submitOffre(e) {

    e.stopPropagation()
    {

      console.warn(this.formOffre.get('titre').value);
      console.warn(this.formOffre.get('description').value);
      console.warn(this.formOffre.get('dateAjout').value);
      this.offreEmploiService.createOffre({
        'titre': this.formOffre.get('titre').value,
        'description': this.formOffre.get('description').value,
        'date_ajout': this.formOffre.get('dateAjout').value,


      }).then(() => {

        console.warn("success");
        this.router.navigate(['/OffreEmploi']);

      })
    }

  }
}

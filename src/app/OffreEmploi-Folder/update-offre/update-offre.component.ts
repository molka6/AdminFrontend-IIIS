import { assertPlatform, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreEmploiService } from '../offre-emploi.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {
  formOffre = new FormGroup({

    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  offreEmploi
  id: any;
  constructor(private offreEmploiService: OffreEmploiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.offreEmploiService.getOneOffreEmploi(id).then((resp) => {
      this.offreEmploi = resp.data; console.log(resp.data)

      this.formOffre.controls['titre'].setValue(this.offreEmploi.title);
      this.formOffre.controls['dateAjout'].setValue(this.offreEmploi.DateAjout);
      this.formOffre.controls['description'].setValue(this.offreEmploi.Description);
    });
  }
  updateOffre(e) {
    const id = this.route.snapshot.paramMap.get("id");
    this.offreEmploiService.updateOffreEmploi(id, {
      'titre': this.formOffre.get('titre').value,
      'description': this.formOffre.get('description').value,
      'date_ajout': this.formOffre.get('dateAjout').value,


    }).then(() => {

      console.warn("success");
      this.router.navigate(['/OffreEmploi']);

    })
  }
}

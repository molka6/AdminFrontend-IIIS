import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireServiceService } from '../partenaire-service.service'
@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {
  formPartenaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    logo: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  Partenaire: any;
  constructor(private partenaireServiceService: PartenaireServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.getOnePartenaire(id).then((resp) => {
      this.Partenaire = resp.data; console.log(resp.data)

      this.formPartenaire.controls['nom'].setValue(this.Partenaire.nom);
      this.formPartenaire.controls['logo'].setValue(this.Partenaire.logo);

    });
  }

  updatepartenaire(e) {

    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.updatePartenaire(id, {
      'nom': this.formPartenaire.get('nom').value,
      'logo': this.formPartenaire.get('logo').value,

    }).then(() => {

      console.warn("success");
      this.router.navigate(['/Partenaire']);

    })
  }



}

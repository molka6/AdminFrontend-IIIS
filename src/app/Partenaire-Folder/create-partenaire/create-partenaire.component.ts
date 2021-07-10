import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartenaireServiceService } from '../partenaire-service.service'

@Component({
  selector: 'app-create-partenaire',
  templateUrl: './create-partenaire.component.html',
  styleUrls: ['./create-partenaire.component.css']
})
export class CreatePartenaireComponent implements OnInit {
  formPartenaire = new FormGroup({

    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    logo: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private PartenaireServiceService: PartenaireServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  submitpartenaire(e) {

    e.stopPropagation()
    {

      console.warn(this.formPartenaire.get('nom').value);
      console.warn(this.formPartenaire.get('logo').value);

      this.PartenaireServiceService.createPartenaire({
        'nom': this.formPartenaire.get('nom').value,
        'logo': this.formPartenaire.get('logo').value,


        
      }).then(() => {

        console.warn("success");
        this.router.navigate(['/Partenaire']);

      })
    }

  }
}

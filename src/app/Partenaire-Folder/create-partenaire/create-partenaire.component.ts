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
    // logo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    logo: new FormControl(null, [Validators.required]),
  });
  constructor(private PartenaireServiceService: PartenaireServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  elem;
  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.formPartenaire.patchValue({
      logo: this.elem.files[0]

    });
    this.formPartenaire.get('logo').updateValueAndValidity()
  }
  submitpartenaire(e) {

    e.stopPropagation()
    {
      var formData: any = new FormData();
      formData.append("logo", this.elem.files[0]);
      formData.append("nom", this.formPartenaire.get('nom').value);
      console.warn(this.formPartenaire.get('nom').value);
      console.log(this.formPartenaire.get('logo').value);
      
      console.log(this.formPartenaire.value)
      this.PartenaireServiceService.createPartenaire(

        formData
      ).then(() => 
      {

        console.warn("success");
        this.router.navigate(['/Partenaire']);

      })
    }

  }
}

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
    nom: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
  });


  
  Partenaire: any;
  constructor(private partenaireServiceService: PartenaireServiceService, private route: ActivatedRoute, private router: Router) { }
  logo: any
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.getOnePartenaire(id).then((resp) => {
      this.Partenaire = resp.data; console.log(resp.data)
      this.formPartenaire.controls['nom'].setValue(this.Partenaire.nom);
      this.logo = this.Partenaire.logo;
      // this.formPartenaire.controls['logo'].setValue(this.Partenaire.logo);

    });
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

  updatepartenaire(e) {

    const id = this.route.snapshot.paramMap.get("id");
    var formData: any = new FormData();
    formData.append("logo", this.elem.files[0]);
    formData.append("nom", this.formPartenaire.get('nom').value);
    this.partenaireServiceService.updatePartenaire(id, formData).then(() => {
      console.warn("success");
      this.router.navigate(['/Partenaire']);

    })
  }


  supprimerLogo() {
    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.DeleteLogo(id).then(() => {
      console.log("succes");
      window.location.reload();
    })
  }


}

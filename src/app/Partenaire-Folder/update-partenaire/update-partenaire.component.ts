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

  Partenaire: any;
  logo: any
  elem;



  formPartenaire = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
  });

  constructor(private partenaireServiceService: PartenaireServiceService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.getOnePartenaire(id).then((resp) => {
      this.Partenaire = resp.data; 
      // console.log(resp.data)
      this.formPartenaire.controls['nom'].setValue(this.Partenaire.nom);
      this.logo = this.Partenaire.logo;
      console.log(this.Partenaire.logo)


      // this.formPartenaire.controls['logo'].setValue(this.Partenaire.logo);
    });
    // this.partenaireServiceService.getImage(id).then((resp) => {
    //   this.Partenaire= resp.data; console.log(resp.data)
    // });
   }


  // uploadFile(event) { 
  //   this.elem = event.target;
  //   // console.log(this.elem.files[0]);
  //   this.formPartenaire.patchValue({
  //     logo: this.elem.files[0]
  //   });
  //   this.formPartenaire.get('logo').updateValueAndValidity()
  // }


  selectedFile ;
  uploadFile(e) {
    const id = this.route.snapshot.paramMap.get("id");
    this.partenaireServiceService.getOnePartenaire(id).then((resp) =>{
    this.Partenaire = resp.data; 
   
    console.log(this.Partenaire.logo)

     } );
    this.selectedFile = e && e.target.files.length > 0 ? e.target.files[0] : e.target.files[0] = this.Partenaire.logo; 
  }


  updatepartenaire(e) {
    const id = this.route.snapshot.paramMap.get("id");
    var formData: any = new FormData();
    formData.append("logo",  this.selectedFile )
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

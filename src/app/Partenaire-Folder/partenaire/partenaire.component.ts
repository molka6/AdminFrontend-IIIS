import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireServiceService } from '../partenaire-service.service'

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  PartenaireListe = [];
  ImageListe=[];

  constructor(private partenaireServiceService: PartenaireServiceService, private router: Router) { }

  ngOnInit(): void {
    this.partenaireServiceService.getAllPartenaire().then((resp) => { this.PartenaireListe = resp.data ; console.log(this.PartenaireListe) });
    // this.partenaireServiceService.getImage().then((resp) => { this.ImageListe = resp.data ; console.log(this.ImageListe)});

  }

  deletePartenaire(element) {

    let dynamicParameter = this.Partenaire(element);

    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.partenaireServiceService.deletePartenaire(dynamicParameter).then(() => {
        console.log("sucsess")
        this.router.navigate(['/Partenaire']);

      }

      )
    }

  }
  Partenaire(element) {

    let id: String;
    this.PartenaireListe.forEach(async (value, index) => {
      if (value == element) {

        id = JSON.parse(element[("id")]);

      }

    })

    return id
  }





}

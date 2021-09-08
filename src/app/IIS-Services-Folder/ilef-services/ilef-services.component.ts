import { Component, OnInit } from '@angular/core';
import { IlefServiceService } from '../ilef-service.service'
@Component({
  selector: 'app-ilef-services',
  templateUrl: './ilef-services.component.html',
  styleUrls: ['./ilef-services.component.css']
})
export class IlefServicesComponent implements OnInit {
  ServiceListe = [];
  isDataLoading =true ; 
  constructor(private ilefServiceService: IlefServiceService) { }

  ngOnInit(): void {

    this.ilefServiceService.getAllService().then((resp) => { this.ServiceListe = resp.data ;
      this.isDataLoading =false ; });
  }

  deleteService(id) {

    // let dynamicParameter = this.OffreEmploiId(element);

    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.ilefServiceService.deleteService(id).then(() => {

        window.location.reload();
      }

      )
    }

}
}

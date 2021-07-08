import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IlefServiceService } from '../ilef-service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  formService = new FormGroup({

    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private ilefServiceService: IlefServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitService(e) {

    e.stopPropagation()
    {

      console.warn(this.formService.get('titre').value);
      console.warn(this.formService.get('description').value);
      this.ilefServiceService.createService( {
        'title': this.formService.get('titre').value,
        'description': this.formService.get('description').value,
      }  ).then(() => {

        console.warn("success");
        this.router.navigate(['/Services']);

      })
    }

  }

}

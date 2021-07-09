import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IlefServiceService } from '../ilef-service.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  formService = new FormGroup({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  Service
  constructor(private ilefServiceService: IlefServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");

    this.ilefServiceService.getOneService(id).then((resp) => {
      this.formService = resp.data; console.log(resp.data)


      this.formService.controls['title'].setValue('jjj');
      this.formService.controls['description'].setValue(this.Service.Description);

    });
  }
  UpdateService(e) {

  }
}

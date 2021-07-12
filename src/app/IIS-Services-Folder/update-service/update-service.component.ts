import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  OneService: any;
  constructor(private ilefServiceService: IlefServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");

    this.ilefServiceService.getOneService(id).then((resp) => {
      this.OneService = resp.data; console.log(resp.data)

      this.formService.controls['title'].setValue(this.OneService.title);
      this.formService.controls['description'].setValue(this.OneService.Description);

    });
  }
  UpdateService(e) {
    const id = this.route.snapshot.paramMap.get("id");
    this.ilefServiceService.updateService(id, {
      'title': this.formService.get('title').value,
      'description': this.formService.get('description').value,

    }).then(() => {

      console.warn("success");
      this.router.navigate(['/Services']);

    })

  }
}

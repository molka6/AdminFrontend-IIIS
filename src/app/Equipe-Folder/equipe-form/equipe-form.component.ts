import { Component, OnInit } from '@angular/core';
import { EquipeService, } from './../equipe.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.css']
})
export class EquipeFormComponent implements OnInit {
  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    avatar: new FormControl(null, [Validators.required]),
  });
  constructor(private router: Router, private http: Http) { }
  ngOnInit(): void {
  }
  elem;
  uploadFile(event) {
    this.elem = event.target;
    // console.log(this.elem.files[0]);
    this.form.patchValue({
      avatar: this.elem.files[0]

    });
    this.form.get('avatar').updateValueAndValidity()
  }
  submitForm() {
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("file", this.elem.files[0]);
    formData.append("nom", this.form.get('nom').value);
    formData.append("prenom", this.form.get('prenom').value);
    formData.append("role", this.form.get('role').value);
    formData.append("Email", this.form.get('Email').value);
    this.http.post('http://127.0.0.1:8000/createpersonne', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}

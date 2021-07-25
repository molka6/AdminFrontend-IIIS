import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    DateAjout: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('null', [Validators.required]),
  });
  Articles = [];
  constructor(private router: Router,private http: Http) { }
  ngOnInit(): void {
  }
  elem;
  uploadFile(event) {
    this.elem = event.target;
    console.log(this.elem.files[0]);
    this.form.patchValue({
      image: this.elem.files[0]

    });
    this.form.get('image').updateValueAndValidity()
  }
  submitForm() {
    console.log(this.form.value)
    var formData: any = new FormData();
    formData.append("file", this.elem.files[0]);
    formData.append("title", this.form.get('title').value);
    formData.append("DateAjout", this.form.get('DateAjout').value);
    console.log(this.form.get('DateAjout').value)
    formData.append("description", this.form.get('description').value);
    this.http.post('http://127.0.0.1:8000/createArticle', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.router.navigate(['/Articles']);
  }
}

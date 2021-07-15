import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  formArticle = new FormGroup({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  Articles = [];
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {

    this.articleService.getAllArticles().then((resp) => { this.Articles = resp.data; console.log(this.Articles) });

    this.foo();
  }
  submitArticle(e) {
    console.log(e.preventDefault());
    e.stopPropagation()

    {

      console.warn(this.formArticle.get('title').value);
      console.warn(this.formArticle.get('description').value);
      console.warn(this.formArticle.get('dateAjout').value);
      console.warn(this.formArticle.get('image').value);
      console.log(location.origin);
      console.log(location.href);
      console.log(location.pathname);


      this.articleService.createArticle({

        'title': this.formArticle.get('title').value,
        'description': this.formArticle.get('description').value,
        'DateAjout': this.formArticle.get('dateAjout').value,
        'image': this.formArticle.get('image').value,


      }).then(() => {


        console.warn("success");
        this.router.navigate(['/Articles']);

      })
    }

  }

  foo(): void {
    console.log(location.origin);
    console.log(location.href);
    console.log(location.pathname);

  }


}
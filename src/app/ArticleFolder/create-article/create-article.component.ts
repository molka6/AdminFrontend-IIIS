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

    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }
  submitArticle(e) {
    e.stopPropagation()
    {

      console.warn(this.formArticle.get('titre').value);
      console.warn(this.formArticle.get('description').value);
      console.warn(this.formArticle.get('dateAjout').value);
      console.warn(this.formArticle.get('image').value);
      this.articleService.createArticle({
        'title': this.formArticle.get('titre').value,
        'description': this.formArticle.get('description').value,
        'DateAjoutt': this.formArticle.get('dateAjout').value,
        'image': this.formArticle.get('image').value,


      }).then(() => {

        console.warn("success");
        this.router.navigate(['/Articles']);

      })
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  formArticle = new FormGroup({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateAjout: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  Article: any;
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.getOneArticle(id).then((resp) => {
      this.Article = resp.data; console.log(resp.data)

      this.formArticle.controls['title'].setValue(this.Article.title);
      this.formArticle.controls['dateAjout'].setValue(this.Article.DateAjout);
      this.formArticle.controls['description'].setValue(this.Article.description);
      this.formArticle.controls['image'].setValue(this.Article.image);
    });
  }
  UpdateArticle(e) {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.updateArticle(id, {
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


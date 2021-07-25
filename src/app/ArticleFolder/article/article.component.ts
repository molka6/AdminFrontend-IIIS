import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Articles = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

    this.articleService.getAllArticles().then((resp) => { this.Articles = resp.data; console.log(this.Articles) });
  }
  deleteArticle(id) {

    var result = confirm("Cliquer sur OK pour confirmer la suppression ! ")
    if (result) {
      this.articleService.deleteArticle(id).then(() => {

        window.location.reload();
      }

      )
    }
  }
}

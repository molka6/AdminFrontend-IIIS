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

}

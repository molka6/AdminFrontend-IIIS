import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../article.service' ; 

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
public listArticle : []; 
  constructor(private  articleService  : ArticleService  ) { }
  async ngOnInit() {
      return await this.articleService.getArticles().then((resp) => { this.listArticle = resp.data
        ,console.log(this.listArticle )});   
  }
}




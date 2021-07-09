import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BaseUrl = 'http://localhost:8000/Articles';
  UrlCreate: 'http://localhost:8000/createArticle';

  constructor() { }

  async getAllArticles() {

    return await axios.get(`${this.BaseUrl}`);

  }

  createArticle(Article) {
    return axios.post(`${this.UrlCreate}`, Article);

  }
}

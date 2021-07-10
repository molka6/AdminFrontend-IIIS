import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BaseUrl = 'http://localhost:8000/Articles';
  UrlCreate = 'http://localhost:8000/createArticle';
  BaseUrlUpdate = 'http://localhost:8000/UpdateArticle/';
  BaseUrlArticle = 'http://localhost:8000/getArticle';
  UrlDelete = "http://localhost:8000/Article";

  constructor() { }

  async getAllArticles() {

    return await axios.get(`${this.BaseUrl}`);

  }

  createArticle(Article) {
    return axios.post(`${this.UrlCreate}`, Article);

  }

  async getOneArticle(id) {

    return await axios.get(`${this.BaseUrlArticle}` + '/' + id);

  }
  async updateArticle(id, offre) {
    return await axios.put(`${this.BaseUrlUpdate}` + id, offre);

  }

  async deleteArticle(id) {
    return await axios.delete(this.UrlDelete + "/" + id)
  }
}

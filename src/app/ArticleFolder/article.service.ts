import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BaseUrl = 'https://localhost:8000/Articles';
  UrlCreate = 'https://localhost:8000/createArticle';
  BaseUrlUpdate = 'https://localhost:8000/UpdateArticle/';
  BaseUrlArticle = 'https://localhost:8000/getArticle';
  UrlDelete = "https://localhost:8000/Article";
  UrlComentaire = 'https://localhost:8000/Avis/';
  UrlDeleteCommentaire = 'https://localhost:8000/Commentaire';

  constructor() { }

  async getAllArticles() {

    return await axios.get(`${this.BaseUrl}`);

  }




  // createArticle(Article) {
  //   return axios.post(`${this.UrlCreate}`, Article);
  // }
  // *
  selectedFile = null;
  OnFileSelected(event) {
    this.selectedFile = event.target.files[0]
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

  async getCommentaires(id) {

    return await axios.get(`${this.UrlComentaire}` + id);

  }

  async deleteArticle(id) {
    return await axios.delete(this.UrlDelete + "/" + id)
  }
  async deleteCommentaire(id) {
    return await axios.delete(this.UrlDeleteCommentaire + "/" + id)
  }

}





import { Injectable } from '@angular/core';
import axios from 'axios';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BaseUrl = 'http://localhost:8000/Articles';
  UrlCreate = 'http://localhost:8000/createArticle';
  BaseUrlUpdate = 'http://localhost:8000/UpdateArticle/';
  BaseUrlArticle = 'http://localhost:8000/getArticle';
  UrlDelete = "http://localhost:8000/Article";
  UrlComentaire = 'http://localhost:8000/Avis/';
  UrlDeleteCommentaire = 'http://localhost:8000/Commentaire';

  constructor(private http: Http) { }

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

  getImages() {
    return this.http.get('http://127.0.0.1:8000/images').map((res) => res.json());
  }

  async updateAvis(id, data) {


    axios.defaults.baseURL = 'https://127.0.0.1:8000/';
    return await axios.patch(`api/avis/` + id, data, {
      data: {
        'Content-Type': 'application/merge-patch+json'

      }

    })

  }

}






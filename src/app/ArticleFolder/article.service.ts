import { Injectable } from '@angular/core';
import axios from 'axios';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BaseUrl = 'http://localhost:8000/Articles';
  UrlCreate: 'http://localhost:8000/createArticle';

  url="http://localhost:8000";

  constructor(private http: Http) { }

  async getAllArticles() {

    return await axios.get(`${this.BaseUrl}`);

  }

  // createArticle(Article) {
  //   return axios.post(`${this.UrlCreate}`, Article);

  // }
  
  createArticle(article:Article) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(this.url + '/createArticle', JSON.stringify(article), { headers: headers }).map(res => res.json()).catch(this.handelError);
  }

  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }


}

export class Article {
  constructor(public id, public title: string, public description: string , public DateAjout: string ,public image: string ) {

  }

}





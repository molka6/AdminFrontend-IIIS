import { Injectable } from '@angular/core';
// import { EventImporterJSON } from '@sports-alliance/sports-lib/lib/events/adapters/importers/json/importer.json';


import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  url = 'http://localhost:8000';
  urlCreate = 'http://localhost:8000/createArticle';


  constructor() { }


  async getArticles() {
    return await axios.get(' http://localhost:8000' + "/Article");
  }


  createOffre(Article) {
    return axios.post(`${this.urlCreate}`, Article);

  }


}

// export interface Article {
//   id: Number,
//   title: String,
//   description: string,
//   DateAjout: string
// }


import { Injectable } from '@angular/core';


import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  url = 'http://localhost:8000';


  constructor() { }


 async getArticles() {
    return await axios.get( ' http://localhost:8000' + "/Article") ; 
  }





}

export interface Article {
  id: Number,
  title: String,
  description: string,
  DateAjout: string
}


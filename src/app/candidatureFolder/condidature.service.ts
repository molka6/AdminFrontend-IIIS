import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CondidatureService {
  UrlGet = 'http://localhost:8000/api/candidatures'
  UrlGetOne= 'http://localhost:8000/api/candidatures'

  constructor() { }

  async getAllCandidature(){
    return await axios.get(`${this.UrlGet}`);
  }

  async getOneCandidature(id) {

    return await axios.get(`${this.UrlGetOne}` + id);

  }


}
 

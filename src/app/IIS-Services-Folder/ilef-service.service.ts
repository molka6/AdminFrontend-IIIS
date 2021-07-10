import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class IlefServiceService {

  UrlService = 'http://localhost:8000/IlefService';
  UrlCreate: 'http://localhost:8000/createService';
  constructor() { }


  async getAllService() {

    return await axios.get(`${this.UrlService}`);

  }

  createService(Service) {
    return axios.post(`${this.UrlCreate}`, Service);
  }


}

import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {
  private BaseUrl = 'http://localhost:8000/offreEmploi';
  private baseUrl1 = 'http://localhost:8000/createoffreEmploi';
  private BaseUrlOffre = 'http://localhost:8000/getOffre';
  private BaseUrlUpdate = 'http://localhost:8000/UpdateoffreEmploi/';
  constructor() { }

  createOffre(offre) {
    return axios.post(`${this.baseUrl1}`, offre);

  }

  async getAllOffreEmploi() {

    return await axios.get(`${this.BaseUrl}`);

  }

  async getOneOffreEmploi(id) {

    return await axios.get(`${this.BaseUrlOffre}` + '/' + id);

  }

  async updateOffreEmploi(id, offre) {
    return await axios.put(`${this.BaseUrlUpdate}` + id, offre);

  }

  async deleteOffre(id) {
    return await axios.delete(this.BaseUrl + "/" + id)
  }

}

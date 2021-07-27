import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PartenaireServiceService {


  constructor() { }

  UrlPart = 'http://localhost:8000/Partenaire';
  UrlCreate = 'http://localhost:8000/createPartenaire';
  UrlOnePart = 'http://localhost:8000/getPartenaire';
  UrlUpdate = 'http://localhost:8000/UpdatePartenaire/';
  UrlDelete = 'http://localhost:8000/Partenaire';
  UrlImage=' http://localhost:8000/logos';
  Urldeltelogo='http://localhost:8000/PartenaireLogo/';

  async getAllPartenaire() {

    return await axios.get(`${this.UrlPart}`);

  }

  createPartenaire(Partenaire) {
    return axios.post(`${this.UrlCreate}`, Partenaire);

  }


  async getOnePartenaire(id) {

    return await axios.get(`${this.UrlOnePart}` + '/' + id);

  }

  async updatePartenaire(id, Partenaire) {
    return await axios.post(`${this.UrlUpdate}` + id, Partenaire);

  }

  async deletePartenaire(id) {

    return await axios.delete(this.UrlDelete + "/" + id)

  }
  async getImage() {

    return await axios.get(`${this.UrlImage}`);

  }

  async DeleteLogo(id) {

    return await axios.get(`${this.Urldeltelogo}` + id);

  }


}

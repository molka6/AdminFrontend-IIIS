import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PartenaireServiceService {


  constructor() { }

  UrlPart = 'https://localhost:8000/Partenaire';
  UrlCreate = 'https://localhost:8000/createPartenaire';
  UrlOnePart = 'https://localhost:8000/getPartenaire';
  UrlUpdate = 'https://localhost:8000/UpdatePartenaire/';
  UrlDelete = 'https://localhost:8000/Partenaire';
  UrlImage=' https://localhost:8000/logos';
  Urldeltelogo='https://localhost:8000/PartenaireLogo/';

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

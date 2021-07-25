import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class IlefServiceService {

  UrlService = 'https://localhost:8000/IlefService';
  UrlCreate = 'https://localhost:8000/createService';
  UrlUpdate = 'https://localhost:8000/UpdateService/';
  UrlOneService = 'https://localhost:8000/getService';
  UrlDelete = 'https://localhost:8000/Service';
  constructor() { }

  async deleteService(id) {
    return await axios.delete(this.UrlDelete + "/" + id)
  }
  async getAllService() {

    return await axios.get(`${this.UrlService}`);

  }

  createService(Service) {

    return axios.post(`${this.UrlCreate}`, Service);
  }

  async updateService(id, Service) {
    return await axios.put(`${this.UrlUpdate}` + id, Service);

  }
  async getOneService(id) {

    return await axios.get(`${this.UrlOneService}` + '/' + id);

  }



 

}

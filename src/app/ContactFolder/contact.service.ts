import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  UrlGet = ' http://localhost:8000/Contacts'
  UrlGetOne = 'http://localhost:8000/Contact/';
  constructor() { }


  async getAllContact() {

    return await axios.get(`${this.UrlGet}`);

  }


  async getOneContact(id) {

    return await axios.get(`${this.UrlGetOne}` + id);

  }
}

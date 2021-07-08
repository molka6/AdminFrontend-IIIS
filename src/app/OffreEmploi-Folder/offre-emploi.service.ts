import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {
 private baseUrl = 'http://localhost:8000/createoffre';
  constructor() { }


  // async createOffreEmploi(OffreEmploi) {
  //   return await axios.post('${this.baseUrl}',OffreEmploi);
  // }
}

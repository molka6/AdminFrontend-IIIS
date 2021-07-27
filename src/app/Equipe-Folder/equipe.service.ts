import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  constructor(private http: Http) { }
  private url = 'http://127.0.0.1:8000';
  Urldeltelogo='http://localhost:8000/Image/';
  
  getpersonnes(): Observable<any[]> {
    const headers = new Headers();
    return this.http.get(this.url + '/personne/', { headers: headers }).map(res => <Equipe[]>res.json()).catch(this.handelError);
  }
  
  deletetPersonne(id: any) {
    const headers = new Headers();
    return this.http.delete(this.url + '/delete/' + id, { headers: headers }).map(res => res.json());
  }

  async UpdateEquipe(id, Equipe) {
    return await axios.post(`${this.url}`+ '/updatepersonn/' + id,Equipe);
  }

  getById(id): Observable<any[]> {
    const headers = new Headers();
    return this.http.get(this.url + '/personne/' + id, { headers: headers }).map(res => <Equipe[]>res.json()).catch(this.handelError);
  }
  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }

  async DeleteLogo(id) {
    return await axios.get(`${this.Urldeltelogo}` + id);
  }



  // async getImage() {
  //   return await axios.get(`${this.UrlImage}`);
  // }


}
export class Equipe {
  constructor(public id, public nom: string, public prenom: string, public role: string, public Email: string, public image: string) {
  }
}

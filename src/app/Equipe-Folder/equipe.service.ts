import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/Operator/map';
import 'rxjs/add/Operator/catch';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  constructor(private http: Http) { }
  private url ='http://127.0.0.1:8000';
 
  addPost(equipe: Equipe) {
    const  headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(this.url +'/createpersonne' , JSON.stringify(equipe), {headers : headers}).map(res => res.json()).catch(this.handelError);
  }
  updatePost(equipe: Equipe , id) {
    const  headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.put(this.url + '/updatepersonn/' + id, JSON.stringify(equipe), {headers : headers}).map(res => res.json()).catch(this.handelError);
  }
  getById(id): Observable<any[]> {
    const  headers = new Headers();
    return  this.http.get(this.url +'/personne/' + id  , {headers : headers}).map(res => <Equipe[]> res.json() ).catch(this.handelError);
  }
  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }
}
export class Equipe{
  constructor(public id, public nom: string ,public prenom :string ,public role :string ,public Email :string) {
  }
}

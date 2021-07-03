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
  private uri= 'http://127.0.0.1:8000/createpersonne';
  private url4='http://localhost:8000/personne/';
  private url3= 'http://localhost:8000/updatepersonn/';
  addPost(post: Post) {
    const  headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(this.uri, JSON.stringify(post), {headers : headers}).map(res => res.json()).catch(this.handelError);
  }
  updatePost(post: Post , id) {
    const  headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.put(this.url3 + id, JSON.stringify(post), {headers : headers}).map(res => res.json()).catch(this.handelError);
  }
  getById(id): Observable<any[]> {
    const  headers = new Headers();
    return  this.http.get(this.url4 + id  , {headers : headers}).map(res => <Post[]> res.json() ).catch(this.handelError);
  }
  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }
}
export class Post {
  constructor(public id, public nom: string ,public prenom :string ,public role :string ,public Email :string) {
  }
}

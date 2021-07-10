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
  private url='http://localhost:8000';
 
  getpersonnes(): Observable<any[]> {
    const  headers = new Headers();
    return  this.http.get(this.url+ '/personne/' , {headers : headers}).map(res => <Equipe[]> res.json() ).catch(this.handelError);
  }
  deletetPersonne(id: any) {
    const  headers = new Headers();
    return this.http.delete(this.url  + '/delete/'+ id, {headers : headers}).map(res => res.json());
  }
  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }
}
export class Equipe{
  constructor(public id, public nom: string ,public prenom :string ,public role :string ,public Email :string) {
  }
}

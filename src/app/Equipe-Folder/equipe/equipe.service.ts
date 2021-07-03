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
  private ur='http://localhost:8000/personne';
  private url2='http://localhost:8000/delete/';

  getpersonnes(): Observable<any[]> {
    const  headers = new Headers();
    return  this.http.get(this.ur , {headers : headers}).map(res => <Equipe[]> res.json() ).catch(this.handelError);
  }

  
  deletetPersonne(id: any) {
    const  headers = new Headers();
    return this.http.delete(this.url2  + id, {headers : headers}).map(res => res.json());
  }



  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }

}
export class Equipe{
  constructor(public id, public nom: string ,public prenom :string ,public role :string ,public Email :string) {
  }
}

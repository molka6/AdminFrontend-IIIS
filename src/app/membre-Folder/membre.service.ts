import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: Http) { }
  private url = 'http://127.0.0.1:8000';



  getpersonnes(): Observable<any[]> {
    const  headers = new Headers();
    return  this.http.get(this.url+ '/membre' , {headers : headers}).map(res => <Membre[]> res.json() ).catch(this.handelError);
  }

  private handelError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');

  }

  deletetPersonne(id: any) {
    const  headers = new Headers();
    return this.http.delete(this.url  + '/deletemembre/'+ id, {headers : headers}).map(res => res.json());
  }
  
  
}

export class Membre {
  constructor(public id, public nom: string, public prenom: string, public email: string ,  public password: string , public telephone: string  ) {
  }
}

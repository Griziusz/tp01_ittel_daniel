import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Element } from '../types/element';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getElements(query: string): Observable<Element[]> {
    let params = new HttpParams();
    params = params.set("query", query);
    return this.http.get<Element[]>('/api/list', { params });
  }

  public register(user: Element): Observable<Element> {
    console.log(user);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Element>('/api/user/register', user, httpOptions);
  }

  public login(user: Element): Observable<Element> {
    console.log(user);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Element>('/api/user/register', user, httpOptions);
  }
}

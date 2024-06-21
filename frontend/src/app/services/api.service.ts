import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Element } from '../types/element';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private jwtToken: string | null = null;

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

    return this.http.post<Element>('/api/user/login', user, httpOptions)
      .pipe(
        tap((response: any) => {
          if (response && response.accessToken) {
            this.jwtToken = response.accessToken;
          }
        })
      );
  }
  public isConnected(): boolean {
    return this.jwtToken !== null;
  }

  public logout(): void {
    this.jwtToken = null;
  }

}

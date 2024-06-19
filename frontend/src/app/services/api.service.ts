import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Element } from '../types/element';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  public getElements(query : string) : Observable<Element[]>{
    let params = new HttpParams();
    params = params.set("query", query);
    return this.http.get<Element[]>(environment.backendElements, {params});
  }
}

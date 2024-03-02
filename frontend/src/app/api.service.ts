import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Client } from './types/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  public getClients() : Observable<Client[]>{
    return this.http.get<Client[]>(environment.backendClient);
  }
}

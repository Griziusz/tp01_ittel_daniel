import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';
import { Client } from '../../types/client';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-list',
  // standalone: true,
  // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  clients : Observable<Client[]>
  filteredClients : Observable<Client[]>

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.clients = this.apiService.getClients();
  }

  filterResults(text: string){
    if(!text) {
      this.filteredClients = this.clients;
    }
    this.filteredClients = this.clients
      .pipe(
        map(clients => clients.filter(client => client.name.includes(text)))
      )
  }
}

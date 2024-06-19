import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';
import { Element } from '../../types/element';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  list : Observable<Element[]>;
  query : string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchResults();
  }

  filterResults(text: string){
    if(!text) {
      this.query = text;
    }
    this.fetchResults();
  }

  fetchResults() {
    this.list = this.apiService.getElements(this.query);
  }
}


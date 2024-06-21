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
})
export class ListComponent implements OnInit {

  list : Observable<Element[]>;
  query : string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchResults();
  }

  filterResults(text: string){
    console.log(text);
    if(text != undefined) {
      this.query = text;
    }
    console.log(this.query);
    this.fetchResults();
  }

  fetchResults() {
    console.log(this.query);
    this.list = this.apiService.getElements(this.query);
  }
}


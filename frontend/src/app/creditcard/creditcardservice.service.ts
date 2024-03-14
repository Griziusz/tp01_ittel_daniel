import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardserviceService {
  private cardsSubject = new BehaviorSubject<any[]>([]);
  cards = this.cardsSubject.asObservable();

  constructor() { }

  addCard(card: any) {
    const cards = this.cardsSubject.value.slice();
    cards.push(card);
    this.cardsSubject.next(cards);
  }
}

import { Injectable } from '@angular/core';

import { Hero } from '../models/hero.model';
import { HEROES } from '../mock/mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }
}

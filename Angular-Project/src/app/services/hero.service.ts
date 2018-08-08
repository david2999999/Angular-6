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
}

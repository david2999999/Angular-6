import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../models/hero.model';

import { Observable, of } from 'rxjs';

import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
              private http: HttpClient,
              private messageService: MessageService
          ) { }
  
  getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
    }
  
  getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }
  
  private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}

import { Injectable } from '@angular/core';

import { Hero } from '../models/hero.model';
import { HEROES } from '../mock/mock-heroes';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeroes(): Observable<Hero[]> {
      return of(HEROES);
    }
}

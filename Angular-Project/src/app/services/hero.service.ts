import { Injectable } from '@angular/core';

import { Hero } from '../models/hero.model';
import { HEROES } from '../mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  getHeroes(): Hero[] {
      return HEROES;
  }
}

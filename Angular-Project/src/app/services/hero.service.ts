import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../models/hero.model';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../services/message.service';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

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
                      .pipe(
                              tap(heroes => this.log('fetched heroes')),
                              catchError(this.handleError('getHeroes', []))
                            );
    }
  
  getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }
  
  updateHero (hero: Hero): Observable<any> {
      return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }
  
  private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
  
  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}

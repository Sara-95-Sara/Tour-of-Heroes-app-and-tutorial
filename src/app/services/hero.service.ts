import { IHero } from '../interfaces/i-hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubbenMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  genId(heroes: IHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

 

  getHeroes(): Observable<IHero[]> {
    return  of(this.heroes  as IHero[])
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<IHero[]>('getHeroes', []))
    );
  }

  
   /** GET hero by id. Return `undefined` when id not found 
  getHeroNo404<Data>(id: number): Observable<IHero> {
  //const url = `${this.heroesUrl}/?id=${id}`;
  //  return this.http.get<IHero[]>(url)
  
      .pipe(
        map(heroes => this.heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<IHero>(`getHero id=${id}`))
      );
  }
*/
  /** GET hero by id. Will 404 if id not found 
  getHero(id: number): Observable<IHero> {
    
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<IHero>(`getHero id=${id}`))
      );
  }

  /* GET heroes whose name contains search term 
  searchHeroes(term: string): Observable<IHero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return (`${of(this.heroes  as IHero[])}/?name=${term}`)
    .pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<IHero[]>('searchHeroes', []))
    );
  }
*/
  //////// Save methods //////////

  /** POST: add a new hero to the server 
  addHero(hero: IHero): Observable<IHero> {
    //return this.heroes.push(hero) 
    return of(this.heroes as IHero[]).push(hero) 
    .pipe(
      tap((newHero: IHero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<IHero>('addHero'))
    );
  }
   */
  /** DELETE: delete the hero from the server 
  deleteHero(id: number): Observable<IHero> {
    //const url = `${this.heroesUrl}/${id}`;
    //return this.http.delete<IHero>(url, this.httpOptions)
    this.heroes = this.heroes.filter(id => id !== id);
     
      
    .pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IHero>('deleteHero'))
    );
  }
*/
  /** PUT: update the hero on the server 
  updateHero(hero: IHero): Observable<any> {
    //return this.http.put(this.heroesUrl, hero, this.httpOptions)
    if (hero) {
      of(this.heroes  as IHero[]).subscribe(() => {
        for(let i = 0; i < this.heroes.length; i++) {
          if(this.heroes[i].id === hero.id) {
            this.heroes[i] = hero;
          }
        }
      })
    }
    return of(this.heroes  as IHero[])
    .pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
*/

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<IHero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<IHero>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<IHero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<IHero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<IHero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<IHero[]>(`${this.heroesUrl}/?name=${term}`)
    .pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<IHero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

 
  addHero(hero: IHero): Observable<IHero> {
    hero.id = this.genId(this.heroes);
    this.heroes.push(hero);
    return of(hero)
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<IHero>(url, this.httpOptions)
    
    
    .pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IHero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: IHero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

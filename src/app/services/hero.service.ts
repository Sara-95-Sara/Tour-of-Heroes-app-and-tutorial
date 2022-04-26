import { IHero } from '../interfaces/i-hero';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

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
  ) { }

  getHeroes(): Observable<IHero[]> {
    return  of(this.heroes  as IHero[]);
  }

  getHero(id: number): Observable<IHero> {
    const hero  = this.heroes.find(hero => hero.id === id);

    return  of(hero as IHero);
  }

  searchHeroes(term: string): Observable<IHero[]> {
    var search =  [];
  
    for ( var i = 0; i < this.heroes.length;  i++ ) {
      term = term.toLowerCase();
      var name = this.heroes[i].name.toLowerCase();

      if (name.includes(term)) {
       search.push(this.heroes[i])
      }
    }
    
    return  of (search as IHero[]);
  }
 
  addHero(hero: IHero): Observable<IHero> {
    hero.id = this.genId(this.heroes);

    return of(hero);
  }

  deleteHero(id: number): Observable<IHero> {
   const deletedHero = this.heroes.find(hero => hero.id === id);
   this.heroes.filter(hero => hero.id !== id);
   
   return of(deletedHero as IHero);
  }

  updateHero(hero: IHero): Observable<any> {
    return of(hero);
  }

}

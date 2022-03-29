import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PeopleListComponent } from '../components/people-list/people-list.component';
import {IHero} from  '../interfaces/i-hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
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

    const people = [
      {
        id: 1,
        name: 'John',
        surname1: 'Doe',
        surname2: 'Fernandez',
        gender: 'Male',
        nif: '68911254C',
        birthDate: '20.06.1990',
        lenguage: 'spanish',
        creationDate: '03.02.21',
      },
      {
        id: 2,
        name: 'Jose',
        surname1: 'Luiz',
        surname2: 'Sanchez',
        gender: 'Male',
        birthDate: '14.03.1988',
        nif: '03256917A' ,
        lenguage: 'spanish',
        creationDate: '13.09.20',
      },
      {
        id: 3,
        name: 'Eva',
        surname1: 'Maria',
        surname2: 'Dolorez',
        gender: 'Female',
        birthDate: '21.08.1993',
        nif: '77894875E',
        lenguage: 'ingles',
        creationDate: '02.03.19',
      }
    ];
    
    return {heroes, people};
  }

  genId(heroes: IHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }
  
}
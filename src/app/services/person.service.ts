import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../interfaces/person';




@Injectable({
  providedIn: 'root'
})
export class PersonService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  people = [
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

  constructor(
    private http: HttpClient,
  ) {}

  getPeople(): Observable<Person[]> {
    const people = localStorage.getItem('people');

    if (people) {
      return of(JSON.parse(people) as Person[]);
    }
    
    return of(this.people as Person[]);
  }

  createPerson(person: Person): Observable<Person> {
    return of(person);
  }

  getPerson(id: number): Observable<Person> {
    const person = this.people.find(person => person.id === id);

    return of(person as Person);
  }
  updatePerson(person: Person): Observable<any> {
    return of(person);
  }

}
 
    
       
  

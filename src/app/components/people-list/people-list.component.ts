import { Person } from '../../interfaces/person';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleListComponent implements OnInit {
  person: Person = {} as Person;

  people: Person[] = [];
  
  

  constructor(
    private personService: PersonService,
    private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
    this.getPeople();
    this.primengConfig.ripple = true;
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => {
        this.people = people;
        localStorage.setItem('people', JSON.stringify(this.people));
      })
  }

} 

  

 
  
    
  



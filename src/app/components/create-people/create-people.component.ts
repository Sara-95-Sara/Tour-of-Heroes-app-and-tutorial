import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.scss']
})
export class CreatePeopleComponent implements OnInit {

  person: Person = {} as Person;
  
  people: Person[] = [];

  submitted = false;
  

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  onSubmit() { 
    this.person.id = this.genId(this.people);
    this.personService.createPerson(this.person)
      .subscribe(person => {
        this.people.push(person);
        localStorage.setItem('people', JSON.stringify(this.people));
      });
    this.submitted = true
  }

  genId(people: Person[]): number {
    return people.length > 0 ? Math.max(...people.map(person => person.id)) +1 : 1;
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => {
        this.people = people;
        localStorage.setItem('people', JSON.stringify(this.people));
      });
  }
  
}

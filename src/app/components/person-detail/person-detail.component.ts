import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/services/person.service';
import  { Location } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: Person = {} as Person;

  people: Person[] = [];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.getPerson();
    this.getPeople();
  }

  goBack() : void{
    this.location.back();
  }
 
  save() : void{
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe(() => {
          for(let i = 0; i < this.people.length; i++) {
            if(this.people[i].id === this.person.id) {
              this.people[i] = this.person;
            }
          }
          this.goBack();
          localStorage.setItem('people', JSON.stringify(this.people));
        });
    }
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id)
    .subscribe(person => this.person = person);
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => {
        this.people = people;
        localStorage.setItem('people', JSON.stringify(this.people));
      });
  }

}

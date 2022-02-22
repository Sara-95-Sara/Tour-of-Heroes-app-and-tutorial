import { Component, OnInit } from '@angular/core';
import {IHero} from  '../../interfaces/i-hero';
import { HeroService } from '../../services/hero.service';
//import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
   /* hero: IHero = {
    id: 1,
    name: 'Windstorm'
  };
  */
  heroes: IHero[] = [];
  
 // this.heroes = this.heroService.getHeroes();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  
  getHeroes(): void {
    this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as IHero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
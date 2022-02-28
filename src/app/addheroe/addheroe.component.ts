import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/i-hero';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-addheroe',
  templateUrl: './addheroe.component.html',
  styleUrls: ['./addheroe.component.scss']
})
export class AddheroeComponent implements OnInit {
  

  hero: Hero = {} as Hero;
  heroes: IHero[] = [];
  
  
  
constructor(
  private heroService: HeroService,
  private modalSS: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  closeModal(){
    this.modalSS.$modal.emit(false)
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
  
  onClickAdd(name: string): void {
    this.add(name);
    this.hero.name="";
  }
}
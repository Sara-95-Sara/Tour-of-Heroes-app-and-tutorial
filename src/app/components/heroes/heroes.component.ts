import { Component, OnInit } from '@angular/core';
import {IHero} from  '../../interfaces/i-hero';
import { HeroService } from '../../services/hero.service';
import  { Hero } from '../../models/hero';
//import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  modalSwitch: boolean = false;

  heroes: IHero[] = [];
  
  constructor(
    private heroService: HeroService,
    private modalSS: HeroService
    ) { }


  ngOnInit(): void {
    this.getHeroes();
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor })
  }

  getHeroes(): void {
    this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  openModal() {
    this.modalSwitch = true;
  }
}

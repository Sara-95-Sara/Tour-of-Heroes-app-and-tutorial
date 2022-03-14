import { IHero } from './../../interfaces/i-hero';
import { MessageService } from './../../services/message.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {


  displayModal: boolean = false;

  hero: IHero = {} as IHero;
  
  heroes: IHero[] = [];

  dropdown: IHero;

  


 
  constructor(
    private heroService: HeroService,
    private primengConfig: PrimeNGConfig,
    ){}
    


  ngOnInit(): void {
    this.getHeroes();
    this.primengConfig.ripple = true;
  }

  showModalDialog() {
    this.displayModal = true;
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
    this.displayModal = false;
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  
  

}
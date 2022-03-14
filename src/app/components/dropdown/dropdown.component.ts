
import { IHero } from './../../interfaces/i-hero';
import { Component, OnInit, Input, Output,  EventEmitter, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {

  hero: IHero = {} as IHero; 
  
  heroes: IHero[] = [];
  
  changes : IHero;

  @Input() selectedHero: IHero;

  

 // @Output()   = new EventEmitter<IHero>();
   

 /* addNewItem(value: IHero) {
    this.newItemEvent.emit(value);
  }
 */ 
  constructor(
    private heroService: HeroService,
    private primengConfig: PrimeNGConfig,
  ) {}
 
  

  ngOnInit(): void {
    this.getHeroes();
    this.primengConfig.ripple = true;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
     
  }

}

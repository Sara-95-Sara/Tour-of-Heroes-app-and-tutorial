import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';


@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.scss']
})
export class TablepageComponent implements OnInit {

  hero: IHero = {} as IHero;
  
  @Input() heroes: IHero[];

  @Output() deleteHeroChange= new EventEmitter<IHero>();

  first = 0;

  rows = 10;

  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
 
  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.deleteHeroChange.emit(hero)
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.heroes ? this.first === (this.heroes.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.heroes ? this.first === 0 : true;
  }


}

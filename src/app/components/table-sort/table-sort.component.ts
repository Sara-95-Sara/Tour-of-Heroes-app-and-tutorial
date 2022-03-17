import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';


@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.scss']
})
export class TableSortComponent implements OnInit {

  hero: IHero = {} as IHero;

  @Input() heroes: IHero[];


  @Output() deleteHeroChange= new EventEmitter<IHero>();

  
  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.deleteHeroChange.emit(hero);
  }
}

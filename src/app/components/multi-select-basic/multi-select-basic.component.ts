import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';

@Component({
  selector: 'app-multi-select-basic',
  templateUrl: './multi-select-basic.component.html',
  styleUrls: ['./multi-select-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MultiSelectBasicComponent implements OnInit {

  hero: IHero = {} as IHero;
  
  
  selectedIHeroes: IHero[];
  @Input() heroes: IHero[];

  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
}

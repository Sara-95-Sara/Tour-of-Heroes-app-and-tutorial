import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';

@Component({
  selector: 'app-multi-select-templating',
  templateUrl: './multi-select-templating.component.html',
  styleUrls: ['./multi-select-templating.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MultiSelectTemplatingComponent implements OnInit {

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

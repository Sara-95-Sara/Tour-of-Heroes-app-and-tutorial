import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';

@Component({
  selector: 'app-select-button-single',
  templateUrl: './select-button-single.component.html',
  styleUrls: ['./select-button-single.component.scss']
})
export class SelectButtonSingleComponent implements OnInit {

  hero: IHero = {} as IHero;
  
  selectedHero: IHero;

  value: any;

  @Input() heroes: IHero[];

  constructor(
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}

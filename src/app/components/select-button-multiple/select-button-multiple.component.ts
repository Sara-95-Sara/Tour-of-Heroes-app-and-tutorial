import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';

@Component({
  selector: 'app-select-button-multiple',
  templateUrl: './select-button-multiple.component.html',
  styleUrls: ['./select-button-multiple.component.scss']
})

export class SelectButtonMultipleComponent implements OnInit {
   
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

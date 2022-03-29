
import { IHero } from './../../interfaces/i-hero';
import { Component, OnInit, Input, Output,  EventEmitter, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {

  hero: IHero = {} as IHero; 

  
  @Input() heroes: IHero[];
  
  @Input() selectedHero: IHero;

  @Output() selectedHeroChange = new EventEmitter<IHero>();
   
  onChange(event: any){
    this.selectedHeroChange.emit(event.value);
  }
 
  constructor(
    private primengConfig: PrimeNGConfig,
  ) {}
 
  ngOnInit(): void {;
    this.primengConfig.ripple = true;
  }
}

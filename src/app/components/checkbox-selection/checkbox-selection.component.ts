import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { IHero } from 'src/app/interfaces/i-hero';

@Component({
  selector: 'app-checkbox-selection',
  templateUrl: './checkbox-selection.component.html',
  providers: [MessageService],
  styleUrls: ['./checkbox-selection.component.scss']
})
export class CheckboxSelectionComponent implements OnInit {

  hero: IHero = {} as IHero;

  selectedIHeroes: IHero;

  @Input() heroes: IHero[];

  @Output() deleteHeroChange= new EventEmitter<IHero>();

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true; 
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.deleteHeroChange.emit(hero);
  }
  
  showSuccess(event: any) {                                                                                                
    this.messageService.add({severity:'success', summary: 'your selection has ended with successfully ', detail: `${(event.data.id)}. ${(event.data.name)}`})
  }

}

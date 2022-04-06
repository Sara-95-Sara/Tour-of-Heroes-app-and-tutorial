import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from 'src/app/interfaces/i-hero';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  providers: [MessageService],
  styleUrls: ['./table-selection.component.scss']
})
export class TableSelectionComponent implements OnInit {

  hero: IHero = {} as IHero;

  selectedIHero1: IHero;

  detail?: string | undefined

  @Input() heroes: IHero[];

  @Output() deleteHeroChange= new EventEmitter<IHero>();


  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
 
  showInfo(event: any) {
    this.messageService.add({severity:'info', summary: 'info about selected hero', detail: `${(event.data.id)}. ${(event.data.name)}` });
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.deleteHeroChange.emit(hero)
  }
}

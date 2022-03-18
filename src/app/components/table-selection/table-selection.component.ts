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
  

  @Input() selectedIHero1: IHero;
  
  @Input() heroes: IHero[];

  @Output() selectedIHero1Change= new EventEmitter<IHero>();

 /* addNewSelect(value: IHero){
    this.selectedIHero1Change.emit(value);
  }
  */
  onChangeSelect(event: any){
    this.selectedIHero1Change.emit(event.value);
  }
  
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.selectedIHero1Change.emit(hero)
  }

}

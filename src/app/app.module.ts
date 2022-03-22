import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { TableSortComponent } from './components/table-sort/table-sort.component';
import { TablepageComponent } from './components/tablepage/tablepage.component';
import { TableSelectionComponent } from './components/table-selection/table-selection.component';
import { CheckboxSelectionComponent } from './components/checkbox-selection/checkbox-selection.component';
import { MultiSelectBasicComponent } from './components/multi-select-basic/multi-select-basic.component';
import { MultiSelectTemplatingComponent } from './components/multi-select-templating/multi-select-templating.component';
import { SelectButtonMultipleComponent } from './components/select-button-multiple/select-button-multiple.component';
import { SelectButtonSingleComponent } from './components/select-button-single/select-button-single.component';





@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    DropdownComponent,
    TableSortComponent,
    TablepageComponent,
    TableSelectionComponent,
    CheckboxSelectionComponent,
    MultiSelectBasicComponent,
    MultiSelectTemplatingComponent,
    SelectButtonMultipleComponent,
    SelectButtonSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    DropdownModule,
    MultiSelectModule,
    SelectButtonModule,
    ToastModule,
   


    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

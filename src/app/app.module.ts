import { NgModule, TRANSLATIONS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToastModule} from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
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
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';




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
    PeopleListComponent,
    CreatePeopleComponent,
    PersonDetailComponent,
    CalculatorComponent,
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
    
   
/*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
*/
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

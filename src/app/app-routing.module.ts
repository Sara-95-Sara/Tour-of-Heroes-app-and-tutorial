import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { CalculatorComponent } from './components/calculator/calculator.component';



const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'createPeople', component: CreatePeopleComponent },
  { path: 'person-detail/:id', component: PersonDetailComponent },
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

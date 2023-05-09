import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormComponent } from './newHero/form.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'form', component: FormComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
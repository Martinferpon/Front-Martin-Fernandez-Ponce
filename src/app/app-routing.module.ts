import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina404Component } from './pagina404/pagina404.component';

import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
{ path:'Intro', component:IntroComponent},
{ path:'dashboard', component:DashboardComponent},
{ path:'', redirectTo: '/Intro',pathMatch: "full"},
{ path:'**', component:Pagina404Component},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

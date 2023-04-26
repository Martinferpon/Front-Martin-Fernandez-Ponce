import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina404Component } from './pagina404/pagina404.component';

import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './Ventanas/login/login.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion/neweducacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion/edit-educacion.component';
import { NewSkillComponent } from './hard/new-skill/new-skill.component';
import { EditSkillComponent } from './hard/edit-skill/edit-skill.component';
import { EditAcercadeComponent } from './acercade/edit-acercade/edit-acercade.component';

const routes: Routes = [
{ path:'Intro', component:IntroComponent},
{ path:'login', component:LoginComponent},
{ path:'dashboard', component:DashboardComponent},
{ path:'', redirectTo: '/Intro',pathMatch: "full"},
// { path:'**', component:Pagina404Component},
{ path:'nuevaexp',component:NewExperienciaComponent},
{ path:'editexp/:id', component:EditExperienciaComponent},
{ path:'nuevaeduc',component:NeweducacionComponent },
{ path:'editedu/:id', component:EditEducacionComponent},
{ path:'newskill',component:NewSkillComponent },
{ path:'edithys/:id', component:EditSkillComponent},
{ path:'edacercade/:id', component:EditAcercadeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

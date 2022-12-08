import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Ventanas/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { IntroComponent } from './intro/intro.component';
import { NavdashComponent } from './navdash/navdash.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HardComponent } from './hard/hard.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
     IntroComponent,
     NavdashComponent,
     AcercadeComponent,
     EducacionComponent,
     ExperienciaComponent,
     HardComponent,
     ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

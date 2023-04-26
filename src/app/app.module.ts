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
import { HttpClientModule} from '@angular/common/http';
import { Pagina404Component } from './pagina404/pagina404.component';
import { LogoutComponent } from './Ventanas/logout/logout.component';
import { ModalesComponent } from './modales/modales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { interceptorProvider } from './Servicios/interceptor-service';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion/neweducacion.component';
import { EditEducacionComponent } from './educacion/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './hard/edit-skill/edit-skill.component';
import { NewSkillComponent } from './hard/new-skill/new-skill.component';
import { EditAcercadeComponent } from './acercade/edit-acercade/edit-acercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BannerComponent } from './banner/banner.component';



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
     Pagina404Component,
     LogoutComponent,
     ModalesComponent,
     FooterComponent,
     NewExperienciaComponent,
     EditExperienciaComponent,
     NeweducacionComponent,
     EditEducacionComponent,
     EditSkillComponent,
     NewSkillComponent,
     EditAcercadeComponent,
     BannerComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

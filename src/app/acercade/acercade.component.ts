import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../Servicios/persona.service';
import { TokenService } from '../Servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  persona: persona =null;
 
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged=false;
  ngOnInit(): void {
   

  this.cargarPersona();
  if (this.tokenService.getToken()){
    this.isLogged=true;

   }else this.isLogged=false;
   

  }
  
 cargarPersona() {

  this,this.personaService.detail(1).subscribe(data=>
    {this.persona=data}
    )
 }
}

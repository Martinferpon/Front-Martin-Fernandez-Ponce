import { Component, OnInit } from '@angular/core';
import { SkillService } from '../Servicios/skill.service';
import { TokenService } from '../Servicios/token.service';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
skill: Skill[]=[];
  constructor(private skillS: SkillService, private tokenService: TokenService) {
    
   }
   
   isLogged = false;

  ngOnInit(): void {
    this.CargarSkills ();
    if (this.tokenService.getToken()){
      this.isLogged=true;

     }else this.isLogged=false;
     
  }
  CargarSkills():void{
    this.skillS.lista().subscribe(data =>{this.skill=data});
  }
  delete (id?:number){
    if(id!= undefined){
      this.skillS.delete(id).subscribe(data=>{
        this.CargarSkills();
         },err =>{
          alert("No se pudo borrar la SKILL");
         }
         )
    }
  }
  
}




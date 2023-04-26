import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../Servicios/s-experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  explab:Experiencia =null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data=>{this.explab=data
    }, err => {
      alert("Error al modificar experiencia");
    this.router.navigate (['']);
    })

  }

  onUpdate ():void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id,this.explab).subscribe(data=>{ this.router.navigate([''])
  }, err =>{
    alert("Error al modificar experiencia");
    this.router.navigate (['']);
  }

    )
  }
}

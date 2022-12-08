import { Component, OnInit } from '@angular/core';
import { DatosServiciosService } from '../Servicios/datos.servicios.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datos: DatosServiciosService) { }
 experien: any;
 
  ngOnInit(): void {
  this.datos.getDatos().subscribe(data=>{
    this.experien= data.experiencias;
     })
  }

}

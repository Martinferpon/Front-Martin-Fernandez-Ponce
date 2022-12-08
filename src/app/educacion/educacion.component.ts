import { Component, OnInit } from '@angular/core';
import { DatosServiciosService } from '../Servicios/datos.servicios.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datos: DatosServiciosService) { }
 education: any;
 
  ngOnInit(): void {
  this.datos.getDatos().subscribe(data=>{
    this.education= data.estudios;
    
  })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../Servicios/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
 islogged = false;
  constructor(private router: Router , private tokenService:TokenService ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.islogged=true
    } else {
      this.islogged=false
    }
  }

   onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();

  
  }

    login(){
      this.router.navigate(['/login'])
    }
}

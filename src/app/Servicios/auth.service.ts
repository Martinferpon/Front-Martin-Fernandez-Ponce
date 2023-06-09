import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authUrl= 'https://backendmafp.onrender.com/auth/';
  constructor(private HttpClient: HttpClient) { }

public nuevo (nuevoUsuario:NuevoUsuario ): Observable<any>{
  return this.HttpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
}

public login (loginUsuario:LoginUsuario):Observable<JwtDto>{
  return this.HttpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);

} 
}

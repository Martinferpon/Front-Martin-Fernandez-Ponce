import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expUrl= 'https://backendmafp.onrender.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expUrl + 'lista');
  } 

  public detail (id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expUrl + `detail/${id}`);
  }
  
  public save(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.expUrl + 'create', experiencia);

  }

  public update (id:number, experiencia: Experiencia):Observable<any> {
    return this.httpClient.put<any>(this.expUrl +`update/${id}`, experiencia);

  }
  
  public delete (id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expUrl+`delete/${id}`);

  }
}

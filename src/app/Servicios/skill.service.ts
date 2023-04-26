import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  expUrl= 'https://backendmafp.onrender.com/skill/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.expUrl + 'lista');
  } 
  public detail (id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(this.expUrl + `detail/${id}`);
  }
  
  public save(skill: Skill):Observable<any>{
    return this.httpClient.post<any>(this.expUrl + 'create', skill);

  }

  public update (id:number, skill: Skill):Observable<any> {
    return this.httpClient.put<any>(this.expUrl +`update/${id}`, skill);

  }
  
  public delete (id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expUrl+`delete/${id}`);

  }

}

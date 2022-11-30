import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas/';
  
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }

  public lista(): Observable<persona[]> {
    return this.http.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  public save(Persona: persona): Observable<any> {
    return this.http.post<persona>(this.URL + 'create', Persona);
  }

  public editPersona(id: number, Persona: persona): Observable<persona> {
    return this.http.put<persona>(this.URL + `update/${id}`, Persona);
  }

  /*public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}



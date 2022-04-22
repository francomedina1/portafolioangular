import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Persona} from '../entidades/aboutme';
import { Skills } from '../entidades/skills';
import { Experiencia } from '../entidades/experiencia';
import { Estudio } from '../entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatosPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>('./assets/data/persona.json');
  }
  editarDatosPersona(persona:Persona):Observable<Persona>{
    return  this.http.post<Persona>("http://localhost:8080/persona",persona);
  }

  obtenerDatosSkills():Observable<any>{
    return this.http.get('http://localhost:8080/skills');
  }
  agregarskills(skills:Skills):Observable<any>{
    return  this.http.post('http://localhost:8080/skills',skills);
  }

  eliminarskills(id:number):Observable<any>{
    return  this.http.delete('http://localhost:8080/skills'+"/"+id);
  }
  obtenerDatosStudy():Observable<any>{
    return this.http.get('./assets/data/estudios.json');
  }

  obtenerDatosProyectos():Observable<any>{
    return this.http.get('./assets/data/proyectos.json');
  }

  agregarexperienciaa(experiencia:Experiencia):Observable<any>{
    return  this.http.post('http://localhost:3000/posts',experiencia);
  }
  agregarestudio(estudio:Estudio):Observable<any>{
    return  this.http.post('http://localhost:3000/posts',estudio);
  }

}

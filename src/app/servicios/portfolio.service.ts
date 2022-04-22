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

  obtenerDatosPersona():Observable<any>{
    return this.http.get("http://localhost:8080/persona");
  }
  editarDatosPersona(persona:Persona):Observable<any>{
    return  this.http.post("http://localhost:8080/persona",persona);
  }

  obtenerDatosSkills():Observable<any>{
    return this.http.get('./assets/data/skills.json');
  }

  obtenerDatosStudy():Observable<any>{
    return this.http.get('./assets/data/estudios.json');
  }

  obtenerDatosProyectos():Observable<any>{
    return this.http.get('./assets/data/proyectos.json');
  }



  agregarskills(skills:Skills):Observable<any>{
    return  this.http.post('http://localhost:3000/posts',skills);
  }

  eliminarskills(title:any):Observable<any>{
    return  this.http.delete('http://localhost:3000/post',title);
  }
  agregarexperienciaa(experiencia:Experiencia):Observable<any>{
    return  this.http.post('http://localhost:3000/posts',experiencia);
  }
  agregarestudio(estudio:Estudio):Observable<any>{
    return  this.http.post('http://localhost:3000/posts',estudio);
  }

}

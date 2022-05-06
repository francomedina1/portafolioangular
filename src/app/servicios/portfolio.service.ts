import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {Persona} from '../entidades/aboutme';
import { Skills } from '../entidades/skills';
import { Experiencia } from '../entidades/experiencia';
import { Estudio } from '../entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="https://portfoliofrancomedina.herokuapp.com ";
  //https://portfoliofrancomedina-89f9b.web.app/
  //https://portfoliofrancomedina.herokuapp.com/ 

  constructor(private http:HttpClient) { }



  obtenerDatosPersona():Observable<any>{
    return this.http.get(this.url+'/persona');
  }
  editarDatosPersona(persona:Persona):Observable<any>{
    return  this.http.post(this.url+'/persona',persona);
    
  }





  obtenerDatosSkills():Observable<any>{
    return this.http.get(this.url+'/skills');
  }
  agregarskills(skills:Skills):Observable<any>{
    return  this.http.post(this.url+'/skills',skills);
  }

  eliminarskills(id:number):Observable<any>{
    return  this.http.delete(this.url+'/skills'+"/"+id);
  }
 




  obtenerDatosProyectos():Observable<any>{
    return this.http.get(this.url+'/experiencia');
  }

  agregarexperienciaa(experiencia:Experiencia):Observable<any>{
    return  this.http.post(this.url+'/experiencia',experiencia);
  }
  eliminarExperiencias(id:number):Observable<any>{
    return  this.http.delete(this.url+'/experiencia'+"/"+id);
  }






  obtenerDatosStudy():Observable<any>{
    return this.http.get(this.url+'/estudios');
  }

  agregarestudio(estudio:Estudio):Observable<any>{
    return  this.http.post(this.url+'/estudios',estudio);
  }
  eliminarEstudio(id:number):Observable<any>{
    return  this.http.delete(this.url+'/estudios'+"/"+id);
  }


}

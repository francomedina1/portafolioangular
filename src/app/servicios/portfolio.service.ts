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

 
  

  constructor(private http:HttpClient) { }



  obtenerDatosPersona():Observable<any>{
    return this.http.get('https://portfoliofrancomedina.herokuapp.com/persona');
  }
  editarDatosPersona(persona:Persona):Observable<any>{
    return  this.http.post('https://portfoliofrancomedina.herokuapp.com/persona',persona);
    
  }





  obtenerDatosSkills():Observable<any>{
    return this.http.get('https://portfoliofrancomedina.herokuapp.com/skills');
  }
  agregarskills(skills:Skills):Observable<any>{
    return  this.http.post('https://portfoliofrancomedina.herokuapp.com/skills',skills);
  }

  eliminarskills(id:number):Observable<any>{
    return  this.http.delete('https://portfoliofrancomedina.herokuapp.com/skills'+"/"+id);
  }
 




  obtenerDatosProyectos():Observable<any>{
    return this.http.get('https://portfoliofrancomedina.herokuapp.com/experiencia');
  }

  agregarexperienciaa(experiencia:Experiencia):Observable<any>{
    return  this.http.post('https://portfoliofrancomedina.herokuapp.com/experiencia',experiencia);
  }
  eliminarExperiencias(id:number):Observable<any>{
    return  this.http.delete('https://portfoliofrancomedina.herokuapp.com/experiencia'+"/"+id);
  }






  obtenerDatosStudy():Observable<any>{
    return this.http.get('https://portfoliofrancomedina.herokuapp.com/estudios');
  }

  agregarestudio(estudio:Estudio):Observable<any>{
    return  this.http.post('https://portfoliofrancomedina.herokuapp.com/estudios',estudio);
  }
  eliminarEstudio(id:number):Observable<any>{
    return  this.http.delete('https://portfoliofrancomedina.herokuapp.com/estudios'+"/"+id);
  }


}

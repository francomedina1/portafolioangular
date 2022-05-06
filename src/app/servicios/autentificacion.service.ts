import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,observable } from 'rxjs';
import { Login } from '../entidades/login';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  url:string="http://localhost:8080";
  //https://portfoliofrancomedina-89f9b.web.app/
  //https://portfoliofrancomedina.herokuapp.com/ 

  constructor(private http:HttpClient) { }


   IniciarSesion(login:Login):Observable<any>
   {
    return  this.http.post(this.url+'/login',login)}


   }

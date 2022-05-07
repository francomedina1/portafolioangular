import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,observable } from 'rxjs';
import { Login } from '../entidades/login';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
 

  constructor(private http:HttpClient) { }


   IniciarSesion(login:Login):Observable<any>
   {
    return  this.http.post('https://portfoliofrancomedina.herokuapp.com/login',login)}


   }

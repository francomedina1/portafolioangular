import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  url="http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject:BehaviorSubject<any>
  constructor(private http:HttpClient) {
    console.log('el servicio corre')
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }


   IniciarSesion(credenciales:any):Observable<any>
   {
     return this.http.post(this.url,credenciales).pipe(map(data=>{
       sessionStorage.setItem('currentUser',JSON.stringify(data));
         return data;
     }))
   }
}

import { Component, OnInit ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entidades/login';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';



@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  datoslogin:any
  usuarioAutenticado:boolean=false;
  form:FormGroup
  constructor(private formbuilder:FormBuilder ,private autentificacionService:AutentificacionService ,private router:Router) {
    this.form=formbuilder.group(
      {
        user:['',[Validators.required]],
        pwd:['',[Validators.required,Validators.minLength(8)]],
        })
      
    
   }

   ngOnInit(): void { 

  }

  verificarusuario(){
    if (this.form.valid){
      let user=this.form.controls["user"].value;
      let pwd=this.form.controls["pwd"].value;
      let usuario=new Login(user , pwd);
      this.autentificacionService.IniciarSesion(usuario).subscribe(data=>{
        
         console.log(data)
         this.usuarioAutenticado=data
         console.log(this.usuarioAutenticado)
         if (data==true){
          this.router.navigate(['/portfolioadmin'])
         }
         else
          this.form.reset();
      
      },
      error => {
        alert("Ups, no se pudo completar la operación. Intente nuevamente y/o consulte al administrador.");
      })
    }
    else
    {
      alert("Hay errores");
      this.form.markAllAsTouched();
    }
    
  } 
   
  
    
  get user()
  {
    return this.form.get('user');
  }
  get pwd()
  {
    return this.form.get('pwd');
  }

}
 


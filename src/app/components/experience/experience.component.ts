import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  proyectosList:any;
  usuarioAutenticado:boolean=true; //debe estar en  false
  form!:FormGroup;

  constructor(private datosPortfolio:PortfolioService ,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      imagen:['',[Validators.required]],

      })
     }
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.proyectosList=data;
    
    })
  }
  eliminarexperiencia(id:number){
    this.datosPortfolio.eliminarExperiencias(id).subscribe(data=>{
      
      document.getElementById("cerrarModalskill")?.click();
    },
    error => {
      alert("Ups, no se pudo completar la operación. Intente nuevamente y/o consulte al administrador.");
    })
  }
  agregarexperiencia(){
    if (this.form.valid){
      let titulo=this.form.controls["titulo"].value;
      let descripcion=this.form.controls["descripcion"].value;
      let imagen=this.form.controls["imagen"].value;
      let experienciaagregar=new Experiencia(this.proyectosList.id,titulo, descripcion , imagen);
      this.datosPortfolio.agregarexperienciaa(experienciaagregar).subscribe(data=>{
        this.proyectosList.push(experienciaagregar);
        this.form.reset();
        document.getElementById("cerrarModalexperiencia")?.click();
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
  
get descripcion()
{
  return this.form.get("descripcion");
}

get titulo()
{
  return this.form.get("titulo");
}
get imagen()
{
  return this.form.get("imagen");
}
}


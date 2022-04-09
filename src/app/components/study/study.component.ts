import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/entidades/estudio';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  studyList:any;
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
    this.datosPortfolio.obtenerDatosStudy().subscribe(data => {
      this.studyList=data["education"];
    
    })
  }
  agregarestudio(){
    if (this.form.valid){
      let titulo=this.form.controls["titulo"].value;
      let descripcion=this.form.controls["descripcion"].value;
      let imagen=this.form.controls["imagen"].value;
      let estudioagregar=new Estudio(titulo, descripcion , imagen);
      this.datosPortfolio.agregarestudio(estudioagregar).subscribe(data=>{
        this.studyList.push(estudioagregar);
        this.form.reset();
        document.getElementById("cerrarModalestudio")?.click();
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


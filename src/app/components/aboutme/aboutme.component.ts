import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Persona } from 'src/app/entidades/aboutme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  datosPersonales:any;
  usuarioAutenticado:boolean=true; //debe estar en  false
  form!:FormGroup;
  
  
  constructor(private datosPortfolio:PortfolioService ,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      fullName:['',[Validators.required]],
      position:['',[Validators.required]],
      description:['',[Validators.required]],
      bannerimage:['',[Validators.required]],
      })
     }
 
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data => {
      this.datosPersonales=data;
      console.log(this.datosPersonales);
    })
  }


guardarEncabezado(){
  if (this.form.valid){
    let fullName=this.form.controls["fullName"].value;
    let position=this.form.controls["position"].value;
    let description=this.form.controls["description"].value;
    let bannerimage=this.form.controls["bannerimage"].value;
    let personaEditar=new Persona(this.datosPersonales.id,fullName,position,description,bannerimage);
    this.datosPortfolio.editarDatosPersona(personaEditar).subscribe(data=>{
      this.datosPersonales=personaEditar;
      this.form.reset();
      document.getElementById("cerrarModalEncabezado")?.click();
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

mostrarDatosEncabezado(){
  this.form.get("fullName")?.setValue(this.datosPersonales.fullName);
  this.form.get("position")?.setValue(this.datosPersonales.position);
  this.form.get("description")?.setValue(this.datosPersonales.description);
  this.form.get("bannerimage")?.setValue(this.datosPersonales.bannerimage);
}

get fullName()
{
  return this.form.get("fullName");
}

get description()
{
  return this.form.get("description");
}

get position()
{
  return this.form.get("position");
}

get bannerimage()
{
  return this.form.get("bannerimage");
}

}
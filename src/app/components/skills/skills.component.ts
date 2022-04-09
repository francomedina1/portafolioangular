import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/entidades/skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList:any;
  usuarioAutenticado:boolean=true; //debe estar en  false
  form!:FormGroup;

  constructor(private datosPortfolio:PortfolioService ,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      icono:['',[Validators.required]],
      title:['',[Validators.required]],

      })
     }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSkills().subscribe(data => {
      this.skillsList=data["skills"];
    
    })
  }
  eliminarskill(title:any){
    this.datosPortfolio.eliminarskills(title).subscribe(data=>{
      
      document.getElementById("cerrarModalskill")?.click();
    },
    error => {
      alert("Ups, no se pudo completar la operación. Intente nuevamente y/o consulte al administrador.");
    })
  }
  agregarskill(){
    if (this.form.valid){
      let title=this.form.controls["title"].value;
      let icono=this.form.controls["icono"].value;
      let skillsagregar=new Skills(title , icono);
      this.datosPortfolio.agregarskills(skillsagregar).subscribe(data=>{
        this.skillsList.push(skillsagregar);
        this.form.reset();
        document.getElementById("cerrarModalskills")?.click();
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
  
get icono()
{
  return this.form.get("icono");
}
get title()
{
  return this.form.get("title");
}
}

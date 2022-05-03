export class Estudio{
    id:number;
    titulo:string;
    descripcion:string;
    imagen:string;

   constructor(id:number, titulo:string,   descripcion:string,  imagen:string)
   {
       this.id=id;
       this.titulo=titulo;
       this.descripcion=descripcion;
       this.imagen=imagen;
   }

}
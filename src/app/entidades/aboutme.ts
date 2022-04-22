export class Persona{
    id:number;
    fullName:string;
    position:string;
    description:string;
    bannerimage:string;
    
   constructor(id:number, fullName:string,   position:string, description:string, bannerimage:string)
   {
       this.id=id;
       this.fullName=fullName;
       this.position=position;
       this.description=description;
       this.bannerimage=bannerimage;
   }

}
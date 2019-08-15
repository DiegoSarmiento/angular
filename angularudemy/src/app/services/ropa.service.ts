import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{
    public nombre_prenda = "Pantalones Angular";

    prueba(nombre_prenda:Number){
        return nombre_prenda;
    }
}
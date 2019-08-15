import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{
    public nombre_prenda = "Pantalones Angular";
    public coleccion_ropa=['Pantalones Blancos', 'Camiseta Roja'];

    prueba(nombre_prenda:Number){
        return nombre_prenda;
    }

    addRopa(nombrePrendaAdd):Array<string>{
        this.coleccion_ropa.push(nombrePrendaAdd);
        return this.getRopa();
    }

    deleteRopa(index){
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.coleccion_ropa;
    }
}
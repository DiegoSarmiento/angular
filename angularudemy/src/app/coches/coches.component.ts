import { Component, OnInit } from '@angular/core';

import { Coche } from "./coche";

import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {

  public coche : Coche;
  public coches:Array<Coche>;
  public articulos;
  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat Panda", "120", "Blanco"),
      new Coche("Renault Clio", "110", "Azul"),
    ];
  }

  onSubmit(){
    console.log(this.coche);
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result =>{
        // console.log(result);
        this.articulos = result;
        if (!this.articulos) {
          console.log("Error en el servidor");
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

}

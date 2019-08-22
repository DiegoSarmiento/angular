import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {

  public titulo;
  public administrador;

  constructor() { 
      this.titulo = "Plantilla ngtemplate Angular";
      this.administrador = true;

  }

  cambiar(value){
    this.administrador= value;
  }


}
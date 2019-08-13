import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = "Componente Empleados:";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:Boolean;
  public color:string;
  public color_seleccionado:string;
  constructor() {
      this.empleado = new Empleado('David Lopez',35,'Cocinero',true);
      this.trabajadores = [
          new Empleado('Manolo Martinez', 35, 'Administrativo',false),
          new Empleado('Ana Lopez', 25, 'Cocinera',true),
          new Empleado('Victor Robles', 66, 'Programador',false)
      ];
      this.trabajador_externo = false;
      this.color = 'blue';
      this.color_seleccionado = 'blue';
   }

  ngOnInit() {
      console.log(this.empleado);
      console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

}

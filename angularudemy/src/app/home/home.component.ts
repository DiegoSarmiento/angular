import { Component, OnInit } from '@angular/core';
import { RopaService } from "../services/ropa.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo="Home";
  public listaRopa:Array<string>;
  public prenda_a_guardar:string;
  public fecha;

  constructor(
    private _ropaService: RopaService
  ) {
    this.fecha = new Date(2019,7,16);
  }

  ngOnInit() {
    this.listaRopa = this._ropaService.getRopa();
    console.log(this.listaRopa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}

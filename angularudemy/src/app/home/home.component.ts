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
  constructor(
    private _ropaService: RopaService
  ) {}

  ngOnInit() {
    console.log(this._ropaService.prueba(7));
  }

}

import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()

export class PeticionesService{
    getPrueba(){
        return "123"
    }
}
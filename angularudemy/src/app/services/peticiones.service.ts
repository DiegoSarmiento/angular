import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders, HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url="http://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "123"
    }

    getArticulos(){
        return this._http.get(this.url).pipe( map(res => res ));
    }
}
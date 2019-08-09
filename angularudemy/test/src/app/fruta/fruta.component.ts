import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    template: '<h2>{{nombre}}</h2>'
})

export class FrutaComponent{
    public nombre = "fruta"
}


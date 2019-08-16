import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(value:number, por:number){
        let value_one = Math.round(value);
        let value_two = Math.round(por); 
        let result = value_one+"x"+value_two+"="+(value_one*value_two);
        return result;
    }
}
import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'custom'
})
export class CustomPipe implements PipeTransform{
    transform(val:any,args?:any):any{
        if(args){
            return val.filter(function(e){
                return e.name.toLowerCase().indexOf(args.toLowerCase())!=-1
            })
        }
        else{
            return val;
        }
          
    }
}
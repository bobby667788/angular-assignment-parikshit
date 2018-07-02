import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './prac.component.html',
  styles: []
})
export class PracticeComponent{
 @Input('name') game;
 @Output() appoutput=new EventEmitter();
 @Output() newoutput=new EventEmitter();
}
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';
  src='';
  new;
  qr=''
  isTrue=true
  games=[{name:"DMC",image:'https://vignette.wikia.nocookie.net/bleedmancomics/images/2/26/Dante.jpg/revision/latest?cb=20130401125548&format=original'},
  {name:"DMC 3",image:'https://beagamecharacter.com/wp-content/uploads/2013/03/DMC3Dante.png'},
  {name:"abcd",image:'https://vignette.wikia.nocookie.net/bleedmancomics/images/2/26/Dante.jpg/revision/latest?cb=20130401125548&format=original'},
  {name:"new game",image:'https://vignette.wikia.nocookie.net/bleedmancomics/images/2/26/Dante.jpg/revision/latest?cb=20130401125548&format=original'}];
  defaultwi=100;
  imgwidth='';

  change(ex):void{
    this.isTrue=ex[0];
    this.new=ex[1];
    this.new.isnew=true;
  }

  change2(ex):void{
    this.isTrue=ex;
    this.new.isnew=false
  }

}

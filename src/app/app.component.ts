import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'hackathon';
  flag:boolean=false;
  constructor() {}
  doSomeLogic()
  {
    this.flag=true;
    
  }
  click()
  {
    window.open("http://l2533:8181/ords/f?p=107:7:101454409795258::NO:::", "_self")
  }
}

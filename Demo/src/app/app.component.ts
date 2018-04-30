import { Component } from '@angular/core';

@Component({ // Metadata , Decorator 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //Class component 
  title = 'Nimesha';
  siteUrl = window.location.href;
  myId = "testId"
  className = "green-text";

  getName(){
    return "Nimesha Buddhika";
  }

  onClick(){
    alert("Click");
  }
}

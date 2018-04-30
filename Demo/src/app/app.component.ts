import {Component} from '@angular/core';

@Component({ // Metadata , Decorator 
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {  //Class component 
    title = 'Nimesha';
    siteUrl = window.location.href;
    className = "green-text";
    msg = "";
    isVisible = false;

    public name = "";

    getName() {
        return "Nimesha Buddhika";
    }

    onClick(event) {
        console.log(event);
        this.msg = "Hello";
    }

    onLog(userName) {
        alert(userName);
    }

    onShow() {
        this.isVisible = !this.isVisible;
    }
}

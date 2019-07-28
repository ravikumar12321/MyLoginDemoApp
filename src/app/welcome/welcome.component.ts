import { Component } from '@angular/core';

@Component({
    selector:'app-welcome',
    templateUrl:'./welcome.component.html',
    styleUrls:[]
})
export class Welcome{

    welcomeMessages : String;

    getMessages(){
        this.welcomeMessages = "WELCOME TO THE PAGE";
    }
}
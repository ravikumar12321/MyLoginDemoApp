import { Component } from '@angular/core';




@Component({
    selector : 'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']

})
export class Login{

    username :String ;
    password :String ;
    pagestatus :boolean = false;

    logging(){
        if(this.username=='abcd' && this.password=='1234'){
            this.pagestatus = true;
        }
        else{
            this.pagestatus = false;
        }
    }
}
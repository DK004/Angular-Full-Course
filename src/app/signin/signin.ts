import {Component} from "@angular/core";

@Component({
    selector: 'app-signin',
    templateUrl:'./signin.html',
    styleUrl:'./signin.css'
    // for simple html and css follow below code
    // template:`<h1>This is the {{title}}</h1>`,
    // styles:[`h1{color:purple;}`]

})

export class SigninComponent{
    title = "Sign-in Page";
}
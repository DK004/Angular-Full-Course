import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  // create a service 
  // constant api url
  apiURL = 'https://jsonplaceholder.typicode.com/users';

  // inject HttpClient through constructor
  constructor(private http : HttpClient){  }

  // create a method to make GET api call to api url
  getUser(){
    return this.http.get(this.apiURL);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loginserv {

  
  islogged(){
   localStorage.setItem('islogin','true');
  }

  isloggedout(){
   localStorage.setItem('islogin','false');
  }

  isauthnticated(){
    return localStorage.getItem('islogin') === 'true';
  }
}

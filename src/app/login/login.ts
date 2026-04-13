import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { Loginserv } from './service/loginserv';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggle,
    RouterLink
],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  useremail: string = '';
  password: string = '';

  constructor(private Loginservice:Loginserv, private router : Router){}
  
  login(){
    const userinfo = localStorage.getItem('userinfo');
    if(userinfo){
      const conuserinfo = JSON.parse(userinfo);
      if(conuserinfo.email === this.useremail && conuserinfo.password === this.password){
        this.Loginservice.islogged();
        this.router.navigate(['/maincontent/home']);
      }else{
        alert('Invalid login detail');
      }
    }else{
      alert('User not found');
    }
  }


  // login() {
  //   this.Loginservice.islogged();
  //   this.router.navigate(['/maincontent/home']);
  //   console.log(this.useremail,this.password);
  // }

  loginwithfacebook() {
  window.open('https://facebook.com/login', '_blank');
}

loginwithgithub() {
  window.open('https://github.com/login', '_blank');
}

loginwithX() {
  window.open('https://X.com/login', '_blank');
}
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  userform!:FormGroup;

  constructor(private router: Router,private fb:FormBuilder) {
    this.userform=this.fb.group({
      Username:['',[Validators.required,Validators.minLength(3)]],
      useremail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get Username(){
    return this.userform.get('Username');
  }
  get useremail(){
    return this.userform.get('useremail');
  }
  get password(){
    return this.userform.get('password');
  }

  register(){

    this.userform.markAllAsTouched();

    if(this.userform.invalid){
      return;
    }

    const userinfo ={
      name: this.Username?.value, // another way to write is "this.userform.get('username')?.value" 
      email:this.useremail?.value,
      password:this.password?.value
    }

    localStorage.setItem('userinfo',JSON.stringify(userinfo));
    alert('Registration successful');
    this.router.navigate(['/login']);
  }

  isagreed = false ;
  agreed(){
    this.isagreed=true;
  }

}

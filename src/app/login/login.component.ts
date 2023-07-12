import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  password2 = '';
  

  constructor(private router:Router){ }
  username: any;
  password: any;


  onLogin(){
    if(this.username === 'regester' && this.password === 'regester123'){
      this.router.navigate(['/home1']);
    }else if(this.username === 'patient' && this.password === 'patient123'){
      this.router.navigate(['/home3']);
    }else if(this.username === 'manager' && this.password === 'manager123'){
      this.router.navigate(['/home4'])
    }else if(this.username === 'doctor' && this.password === 'doctor123'){
      this.router.navigate(['/home'])
    }else if(this.username === 'lab' && this.password ==='lab123'){
      this.router.navigate(['/home2'])
    }
  }

}

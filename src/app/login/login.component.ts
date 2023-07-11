import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any={
    username:"",
    password:"",
  }
// username: any;
//   constructor(private fb:FormBuilder){
//     this.createForm();
    
//   }

  // createForm(){
  //   this.loginForm=this.fb.group({
  //     username:['',Validators.required,Validators.minLength(9), Validators.pattern("[a-zA-Z].*")],
  //     password:['',Validators.required , Validators.minLength(8) , Validators.pattern("[a-z,A-Z]+$")]

  //   });
  // }
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
   }

//   loginForm = new FormGroup({
//     username: new FormControl('', [Validators.required , Validators.minLength(7), Validators.pattern("[a-zA-Z].*")]),
//     password: new FormControl('', [Validators.required , Validators.minLength(8), Validators.pattern("[a-zA-Z].*")]),
//   })
// username: any;

//   submitForm(){
//     console.log(this.loginForm.get("username"));
//   }

  onLogin(){
    if(this.loginForm.username == "admin" && this.loginForm.password == "admin112"){
      this.router.navigateByUrl('home1')
    }else if (this.loginForm.username == "doctor" && this.loginForm.password == 'doctor123'){
      this.router.navigateByUrl("home")
    } else{
        this.router.navigateByUrl("home3")
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  showPassword = false;
  password2 = '';

  loginForm!: FormGroup;
  // username = ''
  // password = ''
  // isSubmitted = false;
  

  constructor(private router:Router , private userService:UserService , private _fb: FormBuilder){ 

   
}
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

  
  // username: any;
  // password: any;
  


  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Call the login method from the UserService
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        // Handle successful login response here
        console.log('Login successful!', response);
        if(response.role == null){
          alert("username or pssword is invalid")
          this.router.navigate(['/']);
        }else if(response.role =="patient"){
          localStorage.setItem("userId",response.id)
          localStorage.setItem("fullname",response.fullname)
          localStorage.setItem("roleName",response.role)
          this.router.navigate(['/home3']);
        }else if (response.role =="lab"){
          localStorage.setItem("userId" ,response.id)
          localStorage.setItem("fullname", response.fullname)
          localStorage.setItem("roleName", response.role)
          this.router.navigate(['/home2']);
        }else if (response.role == "regester"){
          localStorage.setItem("userId", response.id)
          localStorage.setItem("fullname" , response.fullname)
          localStorage.setItem("roleName" , response.role)
          this.router.navigate(['/home1']);
        }else if (response.role == "doctor"){
          localStorage.setItem("userId" , response.id)
          localStorage.setItem("fullname" , response.fullname)
          localStorage.setItem("roleName" , response.role)
          this.router.navigate(['/home']);
        }else if (response.role == "manager"){
          localStorage.setItem("userId" , response.id)
          localStorage.setItem("fullname" , response.fullname)
          localStorage.setItem("roleName" , response.role)
          this.router.navigate(['/home4']);
        }

        // // Redirect to the appropriate route based on the user role or any other criteria
        // if (response.role_name === 'patient') {
        //   this.router.navigate(['/home3']);
        // } else if (response.role_name === 'manager') {
        //   this.router.navigate(['/home4']);
        // } else if (response.role_name === 'doctor') {
        //   this.router.navigate(['/home']);
        // } else if (response.role_name === 'lab') {
        //   this.router.navigate(['/home2']);
        // } else {
        //   // For any other roles, redirect to the default home page
        //   this.router.navigate(['/home1']);
        // }
      },
      (error) => {
        // Handle login error here
        console.error('Login failed!', error);
      }
    );
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctorForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.doctorForm = this._fb.group({
      name:"",
      address:'',
      email:'',
      phoneNo:'',
    
    })
  }
  onFormSubmit(){
    if(this.doctorForm.valid){
      console.log(this.doctorForm.value);
    }
  }


}

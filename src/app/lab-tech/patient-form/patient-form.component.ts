import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {

  patientForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.patientForm = this._fb.group({
      fullName:"",
      phoneNo:'',
      email:'',
      dob:'',
      place:'',
      gender:''

    })
  }
  pName = "Khamis Jumbe Ussi";
  pId = "P00023";

  onFormSubmit(){
    if(this.patientForm.valid){
      console.log(this.patientForm.value);
    }
  }

}

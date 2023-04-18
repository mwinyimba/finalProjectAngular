import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-add-delete',
  templateUrl: './patient-add-delete.component.html',
  styleUrls: ['./patient-add-delete.component.css']
})
export class PatientAddDeleteComponent {
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
  onFormSubmit(){
    if(this.patientForm.valid){
      console.log(this.patientForm.value);
    }
  }

}


// ipo validateHorizontalPosition, lkn kwenye designing Bdo
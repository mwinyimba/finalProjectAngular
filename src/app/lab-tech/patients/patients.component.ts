import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  partient = [
    {
      pId:"znz12345",
      Fname: "Khamis Jumbe Jecha",
      Gender: "Female",
      Action: false,
    },
    {
      pId: "znz87654",
      Fname: "Rahma Kassim Vuai",
      Gender: "Female",
      Action: false,
    },
    {
      pId: "znz12345",
      Fname: "Mwinyi Zahor Shaabani",
      Gender: "Male",
      Action: false,
    },
    {
      pId: "znz12345",
      Fname: "Mrisho Mpoto Hanyage",
      Gender: "Male",
      Action: false,
    },
  ]

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

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { User } from 'src/app/shared/models/user';
import { PatientService } from 'src/app/shared/services/patient.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent {
  showPassword = false;
  password2 = '';
  userForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPatientComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userSerivce:UserService,
    @Inject(MAT_DIALOG_DATA) public user: User,
  ) {}

  ngOnInit(): void {
    const data = this.user;
    this.userForm = this._fb.group({
      id: data.id,
      full_name: data.full_name,
      age:data.age,
      phone_No: data.phone_No,
      email: data.email,
      password: data.password,
      gender:data.gender,
      type_sickle:data.type_sickle,
      address: data.address,
      statusPatient: data.statusPatients,
      role_name: data.role_name,

    
      

      
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient']);
    });
  }

  onFormSubmit() {
   
    let id = this.userForm.value.id;
    let data =  this.userForm.value;
    if (this.userForm.valid) {
      this.userSerivce.update(id, data).subscribe({
        next: () => {
          alert('Success to Update Data');
          this.dialogRef.close();
          this.reload();
        },
        error: () => {},
      });
    }
  }
}

// ipo validateHorizontalPosition, lkn kwenye designing Bdo

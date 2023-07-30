import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  showPassword = false;
  password2 = '';
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddPatientComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this._fb.group({
      full_name: '',
      age: '',
      phone_No: '',
      type_sickle: '',
      email: '',
      password: '',
      gender:'',
      address: '',
      statusPatient: 'hajapimwa',
      role_name: 'patient',
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient']);
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.userService.add(this.userForm.value).subscribe({
        next: () => {
          alert('Success to Add Data');
          this.dialogRef.close();
          this.reload();
        },
        error: () => {},
      });
    }
  }
}

// ipo validateHorizontalPosition, lkn kwenye designing Bdo

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  patientForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddPatientComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private patientServices: PatientService
  ) {
    this.patientForm = this._fb.group({
      name: '',
      address:'',
      phoneNo: '',
      email: '',
      dob: '',
      place: '',
      gender: '',
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient']);
    });
  }

  onFormSubmit() {
    if (this.patientForm.valid) {
      this.patientServices.add(this.patientForm.value).subscribe({
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

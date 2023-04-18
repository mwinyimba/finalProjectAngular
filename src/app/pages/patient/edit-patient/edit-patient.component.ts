import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent {
  patientForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPatientComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private patientServices:PatientService,
    @Inject(MAT_DIALOG_DATA) public patient: Patient,
  ) {}

  ngOnInit(): void {
    const data = this.patient;
    this.patientForm = this._fb.group({
      id: data.id,
      name: data.name,
      address: data.address,
      phoneNo: data.phoneNo,
      email: data.email,
      dob: data.dob,
      place: data.place,
      gender: data.gender,
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient']);
    });
  }

  onFormSubmit() {
   
    let id = this.patientForm.value.id;
    let data =  this.patientForm.value;
    if (this.patientForm.valid) {
      this.patientServices.update(id, data).subscribe({
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

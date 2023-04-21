import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDoctorComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private doctorServices: DoctorService
  ) {
    this.doctorForm = this._fb.group({
      name: '',
      address:'',
      email: '',
      phoneNo: '',
    
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/doctor']);
    });
  }

  onFormSubmit() {
    if (this.doctorForm.valid) {
      this.doctorServices.add(this.doctorForm.value).subscribe({
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

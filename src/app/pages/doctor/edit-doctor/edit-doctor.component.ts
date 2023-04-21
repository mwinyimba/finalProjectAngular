import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctor';
import { DoctorService } from 'src/app/shared/services/doctor.service';
;


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  doctorForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDoctorComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private doctorServices:DoctorService,
    @Inject(MAT_DIALOG_DATA) public doctor: Doctor,
  ) {}

  ngOnInit(): void {
    const data = this.doctor;
    this.doctorForm = this._fb.group({
      id: data.id,
      name: data.name,
      address: data.address,
      email: data.email,
      phoneNo: data.phoneNo,
      
    
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/doctor']);
    });
  }

  onFormSubmit() {
   
    let id = this.doctorForm.value.id;
    let data =  this.doctorForm.value;
    if (this.doctorForm.valid) {
      this.doctorServices.update(id, data).subscribe({
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

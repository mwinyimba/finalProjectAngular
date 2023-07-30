import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Lab } from 'src/app/shared/models/lab';
import { LabService } from 'src/app/shared/services/lab.service';

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent {
  labForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditResultComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private labService:LabService,
    @Inject(MAT_DIALOG_DATA) public lab: Lab,
  ) {}

  ngOnInit(): void {
    const data = this.lab;
    this.labForm = this._fb.group({
      id: data.id,
      patient_name: data.patient_name,
      amount_blood: data.amount_blood,
      hiv: data.hiv,
      pressure: data.pressure,
      weight: data.weight,

      
     
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient-form']);
    });
  }

  onFormSubmit() {
   
    let id = this.labForm.value.id;
    let data =  this.labForm.value;
    if (this.labForm.valid) {
      this.labService.update(id, data).subscribe({
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

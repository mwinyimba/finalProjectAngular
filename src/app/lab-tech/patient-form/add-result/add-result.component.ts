import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LabService } from 'src/app/shared/services/lab.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent {
  labForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddResultComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private labService: LabService
  ) {
    this.labForm = this._fb.group({
      patient_name: '',
      amount_blood:'',
      hiv: '',
      pressure: '',
      weight: '',
     
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient-form']);
    });
  }

  onFormSubmit() {
    if (this.labForm.valid) {
      this.labService.add(this.labForm.value).subscribe({
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { LabService } from 'src/app/shared/services/lab.service';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  styleUrls: ['./add-r.component.css']
})
export class AddRComponent implements OnInit {
  labForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private labService: LabService,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {

  }

  ngOnInit(): void {
    const patient =this.user;
    var labTechId = localStorage.getItem("userId");
    
    this.labForm = this._fb.group({
      full_name: patient.full_name,
      amount_blood:'',
      hiv: '',
      pressure: '',
      weight: '',
      patientId:patient.id,
      labTech:labTechId
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/patient-form']);
    });
  }

  onFormSubmit() {
    console.log(this.labForm.value)
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

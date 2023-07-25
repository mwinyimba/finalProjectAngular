import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Lab } from 'src/app/shared/models/lab';
import { Treatment } from 'src/app/shared/models/treatment';
import { LabService } from 'src/app/shared/services/lab.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';

@Component({
  selector: 'app-treatp',
  templateUrl: './treatp.component.html',
  styleUrls: ['./treatp.component.css']
})
export class TreatpComponent implements OnInit{
  treatForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TreatpComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private treatmentService: TreatmentService,
    @Inject(MAT_DIALOG_DATA) public labData: Lab
  ) {

  }

  ngOnInit(): void {
    // const patient =this.treatment;
    var labTechId = localStorage.getItem("userId");
    
    this.treatForm = this._fb.group({
      medical:'',
      returnDate:'',
      labId:this.labData.id
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/partient']);
    });
  }

  onFormSubmit() {
    console.log(this.treatForm.value)
    if (this.treatForm.valid) {
      this.treatmentService.add(this.treatForm.value).subscribe({
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

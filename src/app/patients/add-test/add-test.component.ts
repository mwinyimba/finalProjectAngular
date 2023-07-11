import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent {
  // testForm: FormGroup 

  // constructor(
  //   public dialogRef: MatDialogRef<AddTestComponent>,
  //   private _fb: FormBuilder,
  //   private router: Router,
  //   private testservice: TestService
  // ) {
  //   this.testForm = this._fb.group({
  //     name: '',
  //     emergence:'',
     
  //   });
  // }
  // reload() {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['/patient-emer']);
  //   });
  // }

  // onFormSubmit() {
  //   if (this.testForm.valid) {
  //     this.testservice.add(this.testForm.value).subscribe({
  //       next: () => {
  //         alert('Success to Add Data');
  //         this.dialogRef.close();
  //         this.reload();
  //       },
  //       error: () => {},
  //     });
  //   }
  // }

}

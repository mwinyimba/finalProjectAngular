import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup 

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this._fb.group({
      first_name: '',
      last_name:'',
      age:'',
      phone_No: '',
      email: '',
      password: '',
      username: '',
      address:'',
      status:'',
      role_name:'',
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/user']);
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

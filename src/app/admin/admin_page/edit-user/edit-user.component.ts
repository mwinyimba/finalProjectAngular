import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public user: User,
  ) {}

  ngOnInit(): void {
    const data = this.user;
    this.userForm = this._fb.group({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      age: data.age,
      phone_No: data.phone_No,
      email: data.email,
      password:data.password,
      username:data.username,
      address:data.address,
      status:data.status,
      role_name: data.role_name,

     
      
    });
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/regester1']);
    });
  }

  onFormSubmit() {
   
    let id = this.userForm.value.id;
    let data =  this.userForm.value;
    if (this.userForm.valid) {
      this.userService.update(id, data).subscribe({
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

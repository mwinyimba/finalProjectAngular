import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

;
import { Test } from 'src/app/shared/models/test';
import { MessageService } from 'src/app/shared/services/message.service';
import { TestService } from 'src/app/shared/services/test.service';


@Component({
  selector: 'app-patient-emergence',
  templateUrl: './patient-emergence.component.html',
  styleUrls: ['./patient-emergence.component.css']
})
export class PatientEmergenceComponent implements OnInit {
messageForm!:FormGroup

  constructor(
    // public dialogRef: MatDialogRef<AddPatientComponent>,
    private _fb: FormBuilder,
    private router: Router,
    private messageSerives: MessageService
  ) {}
  ngOnInit(): void {
    
    this.messageForm = this._fb.group({
      patientId:localStorage.getItem("userId"),
      message: '',
      respSms:'',
       status:''
     
    });
  }
  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/view-emergence']);
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      this.messageSerives.inerstMessage(this.messageForm.value).subscribe({
        next: () => {
          alert('Send Emergence Successfull');
          // this.dialogRef.close();
          console.log();
          this.reload();
        },
        error: () => {},
      });
    }
  }
  // test:Test = new Test();
  // constructor(private testService:TestService){}
  // ngOnInit(): void {
    
  // }
  // sendEmergence(){
  //   this.testService.addTest(this.test).subscribe(data=>{
  //     console.log(data)
  //   }, error=> console.log(error))
  // }
  // onSubmit(){
  //   console.log(this.test);
  //   this.sendEmergence();
  // }
  

 


}

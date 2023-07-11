import { Component, OnInit, ViewChild } from '@angular/core';

;
import { Test } from 'src/app/shared/models/test';
import { TestService } from 'src/app/shared/services/test.service';


@Component({
  selector: 'app-patient-emergence',
  templateUrl: './patient-emergence.component.html',
  styleUrls: ['./patient-emergence.component.css']
})
export class PatientEmergenceComponent implements OnInit{
  test:Test = new Test();
  constructor(private testService:TestService){}
  ngOnInit(): void {
    
  }
  sendEmergence(){
    this.testService.addTest(this.test).subscribe(data=>{
      console.log(data)
    }, error=> console.log(error))
  }
  onSubmit(){
    console.log(this.test);
    this.sendEmergence();
  }
  

 


}

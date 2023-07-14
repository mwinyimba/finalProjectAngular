import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-lab-home',
  templateUrl: './lab-home.component.html',
  styleUrls: ['./lab-home.component.css']
})
export class LabHomeComponent implements OnInit{
  constructor(private patientService:PatientService){}
  totalPatient: number = 0;
  patients:Patient []= []
  fetchTotalNumberofPatient():void{
    this.patientService.getAll().subscribe((res)=>{
      this.patients = res

      this.totalPatient = res.length | 0
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumberofPatient();
   
  }

}

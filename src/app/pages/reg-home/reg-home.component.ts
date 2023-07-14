import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-reg-home',
  templateUrl: './reg-home.component.html',
  styleUrls: ['./reg-home.component.css']
})
export class RegHomeComponent implements OnInit{
  constructor(private patientService:PatientService){}
  totalPatients: number = 0 ;
  patients:Patient [] = []

  fetchTotalNumberOfPatients():void{
    this.patientService.getAll().subscribe((res)=>{
      this.patients = res
      this.totalPatients = res.length | 0
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumberOfPatients();
   
  }

}

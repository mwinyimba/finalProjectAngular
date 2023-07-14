import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private patientService:PatientService){}
  totalPatient: number = 0;
  patients:Patient [] = []

  fetchTotalNumbeofPatiens():void{
    this.patientService.getAll().subscribe((res)=>{
      this.patients = res
      this.totalPatient = res.length | 0
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumbeofPatiens();
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { User } from 'src/app/shared/models/user';
import { PatientService } from 'src/app/shared/services/patient.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private patientService:PatientService,private userService:UserService){}
  totalPatient: number = 0;
  patients:User [] = []

  fetchTotalNumbeofPatiens():void{
    this.userService.getAllByStatus().subscribe((res)=>{
      this.patients = res
      this.totalPatient = res.length | 0
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumbeofPatiens();
    this.fetchTotalNumbeofUser();
    
  }



  totalUsers: number = 0;
  users:User [] = []

  fetchTotalNumbeofUser():void{
    this.userService.getAll().subscribe((res)=>{
      this.users = res
      this.totalUsers = res.length | 0
    })
  }
 


}

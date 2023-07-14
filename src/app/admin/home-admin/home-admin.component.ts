import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { User } from 'src/app/shared/models/user';
import { PatientService } from 'src/app/shared/services/patient.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{
  constructor(private patientService:PatientService , private userService:UserService){}
  totalPatient: number = 0;
  patients: Patient[] = [];

  fetchTotalNumberofPatient():void{
    this.patientService.getAll().subscribe((res)=>{
      this.patients = res;

      this.totalPatient = res.length | 0;
    });
  }

  // user
  totalUser: number = 0;
  users:User [] = [] ;

  fetchTotalNumberOfUsers():void{
    this.userService.getAll().subscribe((res)=>{
      this.users= res

      this.totalUser = res.length | 0 ;
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumberofPatient();
    this.fetchTotalNumberOfUsers();
    
  }


}

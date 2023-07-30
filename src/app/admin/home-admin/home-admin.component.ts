import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { Treatment } from 'src/app/shared/models/treatment';
import { User } from 'src/app/shared/models/user';
import { PatientService } from 'src/app/shared/services/patient.service';
import { TreatmentService } from 'src/app/shared/services/treatment.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{
  constructor(private patientService:PatientService , private userService:UserService, private treatmentServices:TreatmentService){}
  totalPatient: number = 0;
  patients: User[] = [];

  fetchTotalNumberofPatient():void{
    this.userService.getAllByStatus().subscribe((res)=>{
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

  //doctor

  totalDoctor: number = 0;
  doctors:Treatment [] = [] ;

  fetchTotalNumberOfDoctors():void{
    this.treatmentServices.getAll().subscribe((res)=>{
      this.doctors= res

      this.totalDoctor = res.length | 0 ;
    })
  }
  ngOnInit(): void {
    this.fetchTotalNumberofPatient();
    this.fetchTotalNumberOfUsers();
    this.fetchTotalNumberOfDoctors();
    
  }


}

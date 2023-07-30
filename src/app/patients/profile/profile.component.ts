import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { TreatmentService } from 'src/app/shared/services/treatment.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  resp!:any;
 
  // patientByIdForm!: FormGroup;

  // constructor(
    
  //   private _fb: FormBuilder,
  //   private router: Router,
  //   private userSerivce:UserService,
  //   @Inject(MAT_DIALOG_DATA) public user: User,
  // ) {}

  // ngOnInit(): void {
  //   const data = this.user;
  //   this.patientByIdForm = this._fb.group({
  //     id: data.id
      
  //   });
  // }
  // getAllPatientById(id: number){
  //   this.userSerivce.getByPatientId(id).subscribe((data)=>{
  //     this.patientByIdForm
  //   });
  // }
  printThisPage(){
    window.print();
  }


  patientDetails: any;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','amount_blood','hiv','pressure','weight','ReturnDate','  medicals'];
  notLoggedIn: any;
  constructor(
    private userService:UserService,
    private treatmentService:TreatmentService,
    private labServices:TreatmentService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    var patientId = localStorage.getItem("userId");
    this.onReload(patientId);
  }
  name = 'MWINYI'
  onReload(id:any) {
    this.labServices.getByPatientId(id).subscribe({
      next: (res: any) => {
        this.resp = res;
        this.dataSource = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res )
        
      },
      error: () => {
      },
    });
  }

  




}

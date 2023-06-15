import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  // partient = [
  //   {
  //     pId:"znz12345",
  //     Fname: "Khamis Jumbe Jecha",
  //     Gender: "Female",
  //     Action: false,
  //   },
  //   {
  //     pId: "znz87654",
  //     Fname: "Rahma Kassim Vuai",
  //     Gender: "Female",
  //     Action: false,
  //   },
  //   {
  //     pId: "znz12345",
  //     Fname: "Mwinyi Zahor Shaabani",
  //     Gender: "Male",
  //     Action: false,
  //   },
  //   {
  //     pId: "znz12345",
  //     Fname: "Mrisho Mpoto Hanyage",
  //     Gender: "Male",
  //     Action: false,
  //   },
  // ]

  // patientForm: FormGroup;

  // constructor(private _fb: FormBuilder){
  //   this.patientForm = this._fb.group({
  //     fullName:"",
  //     phoneNo:'',
  //     email:'',
  //     dob:'',
  //     place:'',
  //     gender:''

  //   })
  // }
  // pName = "Khamis Jumbe Ussi";
  // pId = "P00023";

  // onFormSubmit(){
  //   if(this.patientForm.valid){
  //     console.log(this.patientForm.value);
  //   }
  // }


  patientDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','name','address','phoneNo','gender','email',];
  notLoggedIn: any;
  constructor(
    private patientService:PatientService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
  }
  name = 'MWINYI'
  onReload() {
    this.patientService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPatientComponent } from 'src/app/pages/patient/add-patient/add-patient.component';
import { EditPatientComponent } from 'src/app/pages/patient/edit-patient/edit-patient.component';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
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
  
  // constructor(){}

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

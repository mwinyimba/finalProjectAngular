import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditResultComponent } from 'src/app/lab-tech/patient-form/edit-result/edit-result.component';
import { AddPatientComponent } from 'src/app/pages/patient/add-patient/add-patient.component';
import { EditPatientComponent } from 'src/app/pages/patient/edit-patient/edit-patient.component';
import { Lab } from 'src/app/shared/models/lab';
import { Patient } from 'src/app/shared/models/patient';
import { LabService } from 'src/app/shared/services/lab.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { TreatpComponent } from './treatp/treatp.component';

@Component({
  selector: 'app-treat',
  templateUrl: './treat.component.html',
  styleUrls: ['./treat.component.css']
})
export class TreatComponent {

  labDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','patient_name','amount_blood','hiv','pressure','weight','actions'];
  notLoggedIn: any;
  constructor(
    private labService:LabService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
  }
  name = 'MWINYI'
  onReload() {
    this.labService.getAll().subscribe({
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

  // onCreate() {
  //   const options = {
  //     width: '60%',
  //     disableClose: true,
  //   };
  //   this.dialog.open(AddResultComponent, options);
  // }

  onEdit(item: Lab) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(TreatpComponent, options);
  }

 

  onDelete(item: Lab) {
    this.labService.delete(item.id).subscribe({
      next: () => {
        alert("Delete succefull");
        this.onReload();
      },
      error: (err) => {
        this.onReload();
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   

}

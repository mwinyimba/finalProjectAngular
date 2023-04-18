import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { Patient } from 'src/app/shared/models/patient';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  patientDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','name','address','phoneNo','gender','actions'];
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

  onCreate() {
    const options = {
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(AddPatientComponent, options);
  }

  onEdit(item: Patient) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(EditPatientComponent, options);
  }

 

  onDelete(item: Patient) {
    this.patientService.delete(item.id).subscribe({
      next: () => {
        alert("Delete succfull");
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

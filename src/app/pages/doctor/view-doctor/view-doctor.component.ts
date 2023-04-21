import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { Doctor } from 'src/app/shared/models/doctor';
import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  doctorDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','name','address','email','phoneNo','actions'];
  notLoggedIn: any;
  constructor(
    private doctorServies:DoctorService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
  }

  onReload() {
    this.doctorServies.getAll().subscribe({
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
    this.dialog.open(AddDoctorComponent, options);
  }

  onEdit(item: Doctor) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(EditDoctorComponent, options);
  }

 

  onDelete(item: Doctor) {
    this.doctorServies.delete(item.id).subscribe({
      next: () => {
        alert("Delete successfull");
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

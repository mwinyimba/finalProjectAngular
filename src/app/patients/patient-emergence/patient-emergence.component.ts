import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Test } from 'src/app/shared/models/test';
import { TestService } from 'src/app/shared/services/test.service';
import { AddTestComponent } from '../add-test/add-test.component';

@Component({
  selector: 'app-patient-emergence',
  templateUrl: './patient-emergence.component.html',
  styleUrls: ['./patient-emergence.component.css']
})
export class PatientEmergenceComponent {
  testDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','name','emergence','actions'];
  notLoggedIn: any;
  constructor(
    private testService:TestService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.onReload();
    this.dataSource = new MatTableDataSource();
  }
  name = 'MWINYI'
  onReload() {
    this.testService.getAll().subscribe({
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
    this.dialog.open(AddTestComponent, options);
  }



 

  onDelete(item: Test) {
    this.testService.delete(item.id).subscribe({
      next: () => {
        alert("Delete succefull");
        this.onReload();
      },
      error: (err) => {
        this.onReload();
      },
    });
  }

 


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddPatientComponent } from 'src/app/pages/patient/add-patient/add-patient.component';
import { Lab } from 'src/app/shared/models/lab';
import { LabService } from 'src/app/shared/services/lab.service';


import { AddResultComponent } from './add-result/add-result.component';
import { EditResultComponent } from './edit-result/edit-result.component';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  // lab:Lab = new Lab ()


  // constructor(private labService:LabService){}
  // ngOnInit(): void {
   
  // }

  // sendResult(){
  //   this.labService.fillResult(this.lab).subscribe((data)=>{
  //     console.log(data)
  //   } ,error => console.log(error));
    
  // }

  // onSubmit(){
  //   console.log(this.lab)
  //   this.sendResult();
  // }






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
        console.log(res)
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
    this.dialog.open(AddResultComponent, options);
  }

  onEdit(item: Lab) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(EditResultComponent, options);
  }

 

  // onDelete(item: Lab) {
  //   this.labService.delete(item.id).subscribe({
  //     next: () => {
  //       alert("Delete succefull");
  //       this.onReload();
  //     },
  //     error: (err) => {
  //       this.onReload();
  //     },
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   
 
  
  }



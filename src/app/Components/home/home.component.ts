import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PatientAddDeleteComponent } from 'src/app/patient-add-delete/patient-add-delete.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent {
  title= 'secondAngular';
  

  constructor(private _dialog: MatDialog){}

  openAddEditPatientForm(){

    this._dialog.open(PatientAddDeleteComponent);
  }

}

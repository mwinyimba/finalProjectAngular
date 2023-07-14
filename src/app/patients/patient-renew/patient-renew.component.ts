import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patient-renew',
  templateUrl: './patient-renew.component.html',
  styleUrls: ['./patient-renew.component.css']
})
export class PatientRenewComponent{
 
  printThisPage(){
    window.print();
  }

}

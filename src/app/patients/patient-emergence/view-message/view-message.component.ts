import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddPatientComponent } from 'src/app/pages/patient/add-patient/add-patient.component';
import { EditPatientComponent } from 'src/app/pages/patient/edit-patient/edit-patient.component';
import { Message } from 'src/app/shared/models/message';
import { User } from 'src/app/shared/models/user';
import { MessageService } from 'src/app/shared/services/message.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent {
  messageDetails: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['id','message','respSms','statusPnotRead',];
  notLoggedIn: any;
  constructor(
    private messageServices:MessageService,
    private router: Router,
    private dialog:MatDialog
  ) {}
  ngOnInit(): void {
    var patientId = localStorage.getItem("userId");
    
    this.dataSource = new MatTableDataSource();
    this.onReload(patientId);
  }
  name = 'MWINYI'
  onReload(patientId:any) {
  
    this.messageServices.getByIdMessage(patientId).subscribe({
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
    this.dialog.open(AddPatientComponent, options);
  }

  onEdit(item: Message) {
    const options = {
      data: item,
      width: '60%',
      disableClose: true,
    };
    this.dialog.open(EditPatientComponent, options);
  }

 

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

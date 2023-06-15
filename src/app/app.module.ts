import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { PatientAddDeleteComponent } from './dialog/patient-add-delete/patient-add-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { AddPatientComponent } from './pages/patient/add-patient/add-patient.component';
import { EditPatientComponent } from './pages/patient/edit-patient/edit-patient.component';
import { ViewPatientComponent } from './pages/patient/view-patient/view-patient.component';


import { PatientComponent } from './doctor/patient/patient.component';
import { PatientDetailComponent } from './doctor/patient-detail/patient-detail.component';
import { EmergenceComponent } from './doctor/emergence/emergence.component';
import { ScheduleComponent } from './doctor/schedule/schedule.component';
import { NotificationComponent } from './doctor/notification/notification.component';
import { NavigationComponent } from './doctor/navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { LabtechNavComponent } from './lab-tech/labtech-nav/labtech-nav.component';
import { PatientFormComponent } from './lab-tech/patient-form/patient-form.component';
import { PatientsComponent } from './lab-tech/patients/patients.component';
import { MessageComponent } from './lab-tech/message/message.component';
import { RegNavComponent } from './pages/reg-nav/reg-nav.component';
import { RegHomeComponent } from './pages/reg-home/reg-home.component';
import { RegLogoutComponent } from './pages/reg-logout/reg-logout.component';
import { LabHomeComponent } from './lab-tech/lab-home/lab-home.component';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ReportComponent } from './doctor/report/report.component';
import { LabReportComponent } from './lab-tech/lab-report/lab-report.component';
import { RegReportComponent } from './pages/reg-report/reg-report.component';
import { TrashComponent } from './doctor/trash/trash.component';
import { SettingComponent } from './doctor/setting/setting.component';
import { LabSettingComponent } from './lab-tech/lab-setting/lab-setting.component';
import { RegSettingComponent } from './pages/reg-setting/reg-setting.component';
import { PatientNavComponent } from './patients/patient-nav/patient-nav.component';
import { PatientHomeComponent } from './patients/patient-home/patient-home.component';
import { PatientRenewComponent } from './patients/patient-renew/patient-renew.component';
import { PatientSettingComponent } from './patients/patient-setting/patient-setting.component';
import { PatientService } from './shared/services/patient.service';



@NgModule({
  declarations: [
    AppComponent,
    PatientAddDeleteComponent,
    AddPatientComponent,
    EditPatientComponent,
    ViewPatientComponent,
    PatientComponent,
    PatientDetailComponent,
    EmergenceComponent,
    ScheduleComponent,
    NotificationComponent,
    NavigationComponent,
    LoginComponent,
    LabtechNavComponent,
    PatientFormComponent,
    PatientsComponent,
    MessageComponent,
    RegNavComponent,
    RegHomeComponent,
    RegLogoutComponent,
    LabHomeComponent,
    ReportComponent,
    LabReportComponent,
    RegReportComponent,
    TrashComponent,
    SettingComponent,
    LabSettingComponent,
    RegSettingComponent,
    PatientNavComponent,
    PatientHomeComponent,
    PatientRenewComponent,
    PatientSettingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot() ,
    MatToolbarModule ,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatMenuModule,
    CommonModule, 
    CalendarModule,
    FullCalendarModule,
  
    
    
   
  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

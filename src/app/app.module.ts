import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { ReportComponent } from './doctor/report/report.component';
import { LabReportComponent } from './lab-tech/lab-report/lab-report.component';
import { RegReportComponent } from './pages/reg-report/reg-report.component';
import { SettingComponent } from './doctor/setting/setting.component';
import { LabSettingComponent } from './lab-tech/lab-setting/lab-setting.component';
import { RegSettingComponent } from './pages/reg-setting/reg-setting.component';
import { PatientNavComponent } from './patients/patient-nav/patient-nav.component';
import { PatientHomeComponent } from './patients/patient-home/patient-home.component';
import { PatientRenewComponent } from './patients/patient-renew/patient-renew.component';
import { PatientSettingComponent } from './patients/patient-setting/patient-setting.component';
import { PatientService } from './shared/services/patient.service';
import { ForgotComponent } from './forgot/forgot.component';
import { PatientEmergenceComponent } from './patients/patient-emergence/patient-emergence.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { GeneralReportComponent } from './admin/general-report/general-report.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ViewUserComponent } from './admin/admin_page/view-user/view-user.component';
import { AddUserComponent } from './admin/admin_page/add-user/add-user.component';
import { EditUserComponent } from './admin/admin_page/edit-user/edit-user.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { AddTestComponent } from './patients/add-test/add-test.component';
import { ProfileComponent } from './patients/profile/profile.component';
import { TreatComponent } from './doctor/treat/treat.component';
import { AddResultComponent } from './lab-tech/patient-form/add-result/add-result.component';
import { EditResultComponent } from './lab-tech/patient-form/edit-result/edit-result.component';
import { TreatpComponent } from './doctor/treat/treatp/treatp.component';
import { AddRComponent } from './lab-tech/patients/add-r/add-r.component';







@NgModule({
  declarations: [
    AppComponent,
    PatientAddDeleteComponent,
    AddPatientComponent,
    EditPatientComponent,
    ViewPatientComponent,
    PatientComponent,
    
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
    SettingComponent,
    LabSettingComponent,
    RegSettingComponent,
    PatientNavComponent,
    PatientHomeComponent,
    PatientRenewComponent,
    PatientSettingComponent,
    ForgotComponent,
    PatientEmergenceComponent,
    NavAdminComponent,
    RegisterUserComponent,
    GeneralReportComponent,
    HomeAdminComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    AdminSettingComponent,
    AddTestComponent,
    ProfileComponent,
    TreatComponent,
    AddResultComponent,
    EditResultComponent,
    TreatpComponent,
    AddRComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    
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
    FormsModule, 
    MatFormFieldModule,
    AppRoutingModule,
    
    
  
    
    
   
  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

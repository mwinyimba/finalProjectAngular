import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PatienlistComponent } from './Components/patienlist/patienlist.component';
import { UpdatepopupComponent } from './Components/updatepopup/updatepopup.component';
import { AuthComponent } from './Components/service/auth/auth.component';
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
import { NavigationComponent } from './navigation/navigation.component';
import { ViewDoctorComponent } from './pages/doctor/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './pages/doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './pages/doctor/edit-doctor/edit-doctor.component';
import { DoctorComponent } from './dialog/doctor/doctor.component';
 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PatienlistComponent,
    UpdatepopupComponent,
    AuthComponent,
    PatientAddDeleteComponent,
    AddPatientComponent,
    EditPatientComponent,
    ViewPatientComponent,
    NavigationComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    DoctorComponent,
    
    
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
    MatRadioModule

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

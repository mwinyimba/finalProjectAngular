import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PatienlistComponent } from './Components/patienlist/patienlist.component';
import { RegisterComponent } from './Components/register/register.component';
import { PatientAddDeleteComponent } from './dialog/patient-add-delete/patient-add-delete.component';
import { ViewPatientComponent } from './pages/patient/view-patient/view-patient.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewDoctorComponent } from './pages/doctor/view-doctor/view-doctor.component';
import { DoctorComponent } from './dialog/doctor/doctor.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'patient', component: ViewPatientComponent },
     
      { path: 'view', component: ViewDoctorComponent },
     
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

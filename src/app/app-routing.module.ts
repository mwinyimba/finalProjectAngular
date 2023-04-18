import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PatienlistComponent } from './Components/patienlist/patienlist.component';
import { RegisterComponent } from './Components/register/register.component';
import { PatientAddDeleteComponent } from './patient-add-delete/patient-add-delete.component';
import { ViewPatientComponent } from './pages/patient/view-patient/view-patient.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'patient', component: ViewPatientComponent },
      { path: 'patient-add-delete', component: PatientAddDeleteComponent },
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

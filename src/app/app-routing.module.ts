import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPatientComponent } from './pages/patient/view-patient/view-patient.component';
import { NavigationComponent } from './doctor/navigation/navigation.component';
import { HomeComponent } from './doctor/home/home.component';
import { NotificationComponent } from './doctor/notification/notification.component';
import { PatientComponent } from './doctor/patient/patient.component';
import { ScheduleComponent } from './doctor/schedule/schedule.component';
import { EmergenceComponent } from './doctor/emergence/emergence.component';
import { PatientDetailComponent } from './doctor/patient-detail/patient-detail.component';
import { LoginComponent } from './login/login.component';
import { LabtechNavComponent } from './lab-tech/labtech-nav/labtech-nav.component';
import { PatientFormComponent } from './lab-tech/patient-form/patient-form.component';
import { MessageComponent } from './lab-tech/message/message.component';
import { RegHomeComponent } from './pages/reg-home/reg-home.component';
import { RegNavComponent } from './pages/reg-nav/reg-nav.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
  path: '',
  component:NavigationComponent,
  children: [
    
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'notification',
      component: NotificationComponent,
    },
    {
      path: 'partient',
      component: PatientComponent,
    },
    {
      path: 'schedule',
      component:ScheduleComponent,
    },
    {
      path:'emergency',
      component:EmergenceComponent,
    },

    {
      path: 'details',
      component:PatientDetailComponent,
    },
    {
      path: '',
      component: LabtechNavComponent,
      children:[
        {
          path:'patient-form',
          component:PatientFormComponent,
        },
        {
          path:'message',
          component:MessageComponent,
        },
        
    
    
      ]

    },
  
  ]
},
{
  path: '',
  component:RegNavComponent,
  children:[
    {
      path:'home1',
      component:RegHomeComponent,
    },
    { path: 'patient',
    component: ViewPatientComponent 
  },
  ]

}
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

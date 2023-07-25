import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPatientComponent } from './pages/patient/view-patient/view-patient.component';
import { NavigationComponent } from './doctor/navigation/navigation.component';
import { HomeComponent } from './doctor/home/home.component';
import { NotificationComponent } from './doctor/notification/notification.component';
import { PatientComponent } from './doctor/patient/patient.component';
import { ScheduleComponent } from './doctor/schedule/schedule.component';
import { EmergenceComponent } from './doctor/emergence/emergence.component';
import { LoginComponent } from './login/login.component';
import { LabtechNavComponent } from './lab-tech/labtech-nav/labtech-nav.component';
import { PatientFormComponent } from './lab-tech/patient-form/patient-form.component';
import { MessageComponent } from './lab-tech/message/message.component';
import { RegHomeComponent } from './pages/reg-home/reg-home.component';
import { RegNavComponent } from './pages/reg-nav/reg-nav.component';
import { LabHomeComponent } from './lab-tech/lab-home/lab-home.component';

import { LabSettingComponent } from './lab-tech/lab-setting/lab-setting.component';
import { SettingComponent } from './doctor/setting/setting.component';
import { RegSettingComponent } from './pages/reg-setting/reg-setting.component';
import { PatientsComponent } from './lab-tech/patients/patients.component';
import { PatientNavComponent } from './patients/patient-nav/patient-nav.component';
import { PatientHomeComponent } from './patients/patient-home/patient-home.component';
import { PatientRenewComponent } from './patients/patient-renew/patient-renew.component';
import { PatientSettingComponent } from './patients/patient-setting/patient-setting.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PatientEmergenceComponent } from './patients/patient-emergence/patient-emergence.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { GeneralReportComponent } from './admin/general-report/general-report.component';
import { ViewUserComponent } from './admin/admin_page/view-user/view-user.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { ProfileComponent } from './patients/profile/profile.component';
import { TreatComponent } from './doctor/treat/treat.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'forgot',
    component:ForgotComponent

  },
  // doctor
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

    // {
    //   path: 'details',
    //   component:PatientDetailComponent,
    // },
    {
      path:'treat',
      component:TreatComponent,
    },
    {
      path:'setting',
      component:SettingComponent,
    }
  
  
  ]
},
// register
{
  path: '',
  component:RegNavComponent,
  children:[
    {
      path:'home1',
      component:RegHomeComponent,
    },
    { path: 'patient',
    component: ViewPatientComponent ,
    },
    {
      path:'reg-setting',
      component:RegSettingComponent,
    }
  ]

},
// lab
{
  path: '',
  component: LabtechNavComponent,
  children:[
    {
      path:'home2',
      component:LabHomeComponent
    },
    {
      path:'patient-form',
      component:PatientFormComponent,
    },
    {
      path:'message',
      component:MessageComponent,
    },
    {
      path:'lab-setting',
      component:LabSettingComponent,
    },
    {
      path: 'patients',
      component:PatientsComponent,
    }
    


  ]

},
// patient
{
  path:'',
  component:PatientNavComponent,
  children:[
      {
        path:'home3',
        component:PatientHomeComponent,
      },
      {
        path:'renew',
        component:PatientRenewComponent,
      },
      {
        path:'setting-p',
        component:PatientSettingComponent,
      },
      {
        path:'patient-emer',
        component:PatientEmergenceComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      }
  ]
},

// admin
{
  path:'',
  component:NavAdminComponent,
  children:[
    {
      path:'home4',
      component:HomeAdminComponent,
    },
    {
      path:"regester1",
      component:ViewUserComponent,
    },
    {
      path:"general_report",
      component:GeneralReportComponent
    }
    ,
    {
      path:"regester_user",
      component:RegisterUserComponent
    },
    {
      path:"admin_setting",
      component:AdminSettingComponent
    }
  ]
}
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

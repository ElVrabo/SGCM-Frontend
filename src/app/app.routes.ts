import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { ListDoctorsComponent } from './pages/Doctors/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './pages/Patients/list-patients/list-patients.component';
import { ListSpecialitiesComponent } from './pages/Specialities/list-specialities/list-specialities.component';
import { ListOfficesComponent } from './pages/Offices/list-offices/list-offices.component';
import { CreateDoctorsComponent } from './pages/Doctors/create-doctors/create-doctors.component';

export const routes: Routes = [{
    path:"home",
    component: HomeComponent
},
{
    path:"doctors",
    component:ListDoctorsComponent
},
{
path:"doctors/create",
component:CreateDoctorsComponent
},
{
    path:"offices",
    component:ListOfficesComponent
},
   {
    path:"specialities",
    component:ListSpecialitiesComponent
   }
];

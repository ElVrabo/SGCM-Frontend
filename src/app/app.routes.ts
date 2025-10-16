import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { ListDoctorsComponent } from './pages/Doctors/list-doctors/list-doctors.component';
import { ListPatientsComponent } from './pages/Patients/list-patients/list-patients.component';

export const routes: Routes = [{
    path:"home",
    component: HomeComponent
},
{
    path:"doctors",
    component:ListDoctorsComponent
},
   {
    path:"patients",
    component:ListPatientsComponent
   }
];

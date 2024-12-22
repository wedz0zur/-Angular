import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { WorkComponent } from './Components/work/work.component';


export const routes: Routes = [
    {
    path: "home",
    component: HomeComponent
    },
    {
        path: "work",
        component: WorkComponent
    },
   
];

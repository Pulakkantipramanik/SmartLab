import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { BookingComponent } from './booking/booking';
import { ReportComponent } from './report/report';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'report', component: ReportComponent }
];
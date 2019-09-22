import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {HcHomeComponent} from './hc-home/hc-home.component';
import {CalenderComponent} from './calender/calender.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CanActivateGuard} from './services/can-activate.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'hc-home', component: HcHomeComponent, children: [
      { path: 'calender', component: CalenderComponent, canActivate: [CanActivateGuard] },
      { path: 'attendance', component: AttendanceComponent, canActivate: [CanActivateGuard] }
    ], canActivate: [CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

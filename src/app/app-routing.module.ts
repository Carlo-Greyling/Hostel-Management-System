import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {HcHomeComponent} from './hc-home/hc-home.component';
import {CalenderComponent} from './calender/calender.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CanActivateGuard} from './services/can-activate.guard';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import {ProfileComponent} from './profile/profile.component';
import { ResidentComponent } from './resident/resident.component';
import { RepairsComponent } from './repairs/repairs.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hc-home/calender' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'hc-home', component: HcHomeComponent, children: [
      { path: 'calender', component: CalenderComponent, canActivate: [CanActivateGuard]},
      { path: 'attendance', component: AttendanceComponent, canActivate: [CanActivateGuard]},
      { path: 'qr-code', component: QRCodeGeneratorComponent, canActivate: [CanActivateGuard]},
      { path: 'qr-scanner', component: QrCodeScannerComponent, canActivate: [CanActivateGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [CanActivateGuard]},
      { path: 'repairs', component: RepairsComponent,  canActivate: [CanActivateGuard]},
      { path: 'admin', component: AdminComponent,  canActivate: [CanActivateGuard]},
    ], canActivate: [CanActivateGuard]},
  { path: 'residents-home', component: ResidentComponent, children: [
      { path: 'calender', component: CalenderComponent, canActivate: [CanActivateGuard]},
      { path: 'qr-code', component: QRCodeGeneratorComponent, canActivate: [CanActivateGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [CanActivateGuard]},
      { path: 'repairs', component: RepairsComponent,  canActivate: [CanActivateGuard]},
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

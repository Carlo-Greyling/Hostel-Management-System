import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {HcHomeComponent} from './hc-home/hc-home.component';
import {CalenderComponent} from './calender/calender.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {CanActivateGuard} from './services/can-activate.guard';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hc-home' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'hc-home', component: HcHomeComponent, children: [
      { path: 'calender', component: CalenderComponent, canActivate: [CanActivateGuard]},
      { path: 'attendance', component: AttendanceComponent, canActivate: [CanActivateGuard]},
      { path: 'qr-code', component: QRCodeGeneratorComponent, canActivate: [CanActivateGuard]},
      { path: 'qr-scanner', component: QrCodeScannerComponent, canActivate: [CanActivateGuard]}
    ], canActivate: [CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

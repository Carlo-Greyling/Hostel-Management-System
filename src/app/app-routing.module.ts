import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {HcHomeComponent} from './hc-home/hc-home.component';
import {CalenderComponent} from './calender/calender.component';
import {AttendanceComponent} from './attendance/attendance.component';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'hc-home', component: HcHomeComponent, children: [
      { path: 'calender', component: CalenderComponent },
      { path: 'attendance', component: AttendanceComponent }
    ]},
  { path: 'qr-code', component: QRCodeGeneratorComponent },
  { path: 'qr-scanner', component: QrCodeScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

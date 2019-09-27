import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HcHomeComponent } from './hc-home/hc-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { CalenderComponent } from './calender/calender.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { QRScannerComponent } from 'src/app/qr-scanner/zxing-scanner-demo';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
/*import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { FormatsDialogComponent } from './src/app/qr-code-scanner/formats-dialog/formats-dialog.component';*/

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HcHomeComponent,
    CalenderComponent,
    AttendanceComponent,
    QRCodeGeneratorComponent
    // QRScannerComponent
    /*QrCodeScannerComponent,
    FormatsDialogComponent,
    QrScannerComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    AvatarModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxQRCodeModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'round-menu-24px',
      sanitizer.bypassSecurityTrustResourceUrl('assets/round-menu-24px.svg'));
  }
}

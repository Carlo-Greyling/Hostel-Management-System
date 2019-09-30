import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {AuthService} from './services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from './services/firebase.service';
import { ResidentComponent } from './resident/resident.component';

import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { hammerjsVersion } from '@angular/material/schematics/ng-add/version-names';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    HcHomeComponent,
    CalenderComponent,
    AttendanceComponent,
    ResidentComponent,
    QRCodeGeneratorComponent,
    QrCodeScannerComponent,
    ProfileComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    NgxQRCodeModule,
    ZXingScannerModule,
  ],
  providers: [
    MatDatepickerModule,
    AuthService,
    AngularFirestore,
    AngularFireAuth,
    FirebaseService,
    NgxQRCodeModule,
    ZXingScannerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'round-menu-24px',
      sanitizer.bypassSecurityTrustResourceUrl('assets/round-menu-24px.svg'));
  }
}

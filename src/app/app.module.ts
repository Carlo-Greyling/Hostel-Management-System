import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    QRCodeGeneratorComponent
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
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

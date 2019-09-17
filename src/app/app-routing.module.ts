import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { QRCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'qr-code', component: QRCodeGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

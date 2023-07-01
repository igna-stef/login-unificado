import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from './masl.guard';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccessGrantedComponent } from './access-granted/access-granted.component';
import { IframeComponent } from './iframe/iframe.component';
// import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'main-nav', component: MainNavComponent, canActivate: [MaslGuard]},
  { path: 'Reprocess-logs', component: IframeComponent},
  { path: 'Ris-link-access', component: IframeComponent},
  { path: 'Byc1-access', component: IframeComponent},
  { path: 'acceso-denegado', component: AccessDeniedComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

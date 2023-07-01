import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule} from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment.api-mock';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccessGrantedComponent } from './access-granted/access-granted.component';
import { IframeComponent } from './iframe/iframe.component';


export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
		clientId: environment.clientId,
        redirectUri: environment.redirectUri,
        postLogoutRedirectUri: environment.postLogoutRedirectUri,
		authority: environment.authority,        
        navigateToLoginRequestUrl: true,
    }
  })
}
	
@NgModule({
declarations: [
	AppComponent,
 	LoginComponent,
 	MainNavComponent,
 	AccessDeniedComponent,
 	AccessGrantedComponent,
  IframeComponent,
],
imports: [
	AppRoutingModule,
	BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule,
	MatStepperModule,
	MatInputModule,
	MatFormFieldModule,
	ReactiveFormsModule,
	MsalModule,
	MatToolbarModule,
	MatMenuModule
],
providers: [
	{
		provide: MSAL_INSTANCE,
		useFactory: MSALInstanceFactory
	  },
	  MsalService
],
bootstrap: [AppComponent]
})
export class AppModule { }

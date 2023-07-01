import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  response = JSON.parse(localStorage.getItem('response') || '{}');

  constructor(private breakpointObserver: BreakpointObserver, private msalService: MsalService, private router: Router) {}

  isLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null
  }

  getname(): any {
    return this.msalService.instance.getActiveAccount()?.name;
  }

  getapps(): any {
    return this.msalService.instance.getActiveAccount()?.name;
  }

  logout(){
    this.msalService.logoutRedirect();
  }

  redirect(destino: string){
    this.redirectroute(destino, this.response);
  }

  redirectroute (destino: string ,res: { authority?: string; uniqueId?: string; tenantId?: string; scopes?: string[]; account: any; idToken?: string; idTokenClaims?: object; accessToken?: string; fromCache?: boolean; expiresOn?: Date | null; tokenType?: string; correlationId?: string; requestId?: string | undefined; extExpiresOn?: Date | undefined; state?: string | undefined; familyId?: string | undefined; cloudGraphHostName?: string | undefined; msGraphHost?: string | undefined; code?: string | undefined; fromNativeBroker?: boolean | undefined; }): void {
    console.log(this.response);
    if (this.isLoggedIn()){
      if(res.account.idTokenClaims?.roles.includes(destino)){
        localStorage.setItem("accesstoken", JSON.stringify(res.accessToken));
        this.router.navigate([destino]);
      } else{
        this.router.navigate(['acceso-denegado'])
      }
      //nada
    }
  }

}

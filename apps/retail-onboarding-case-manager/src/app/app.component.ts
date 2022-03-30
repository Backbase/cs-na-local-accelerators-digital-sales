import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LayoutService } from '@backbase/ui-ang';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { LogoutService } from './services/logout.service';
import { UserContextCookieService } from './services/user-context-cookie.service';

@Component({
  selector: 'bb-retail-onboarding-case-manager',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  isUserContextCookieSet = this.userContextCookieService.isUserContextCookieSet;
  withUserContext = environment.withUserContext;
  selectContextRedirect = `spa:${environment.contextSwitchedUrl}`;
  private routerSubscription = new Subscription();

  constructor(
    public readonly layoutService: LayoutService,
    private readonly logoutService: LogoutService,
    private readonly router: Router,
    private readonly userContextCookieService: UserContextCookieService,
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((routerEvent) => {
      // todo: temporary fix to dismiss the select context list
      // after switching contextfrom header menu.
      if (routerEvent instanceof NavigationEnd && routerEvent.url === environment?.contextSwitchedUrl) {
        window.location.reload();
      }
    });
  }

  public ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  logout() {
    this.logoutService.logout();
  }
}

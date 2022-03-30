import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { ServiceAgreementHttpService } from '@backbase/data-ang/accesscontrol';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserContextCookieService } from '../services/user-context-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class UserContextGuard implements CanActivate, CanActivateChild {
  private cookieValid = false;

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router,
    private readonly serviceAgreementService: ServiceAgreementHttpService,
    private userContextCookieService: UserContextCookieService,
  ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute);
  }

  canActivate(
    // eslint-disable-next-line
    _next: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!environment.withUserContext) return true;

    const cookieIsSet = this.cookieService.check('USER_CONTEXT');

    if (!cookieIsSet) {
      return this.getSelectContextUrlTree();
    }

    return (
      this.cookieValid ||
      this.validateUserContextCookie().pipe(map((isValid) => isValid || this.getSelectContextUrlTree()))
    );
  }

  private getSelectContextUrlTree(): UrlTree {
    return this.router.createUrlTree(['/select-context']);
  }

  private validateUserContextCookie(): Observable<boolean> {
    return this.serviceAgreementService.getServiceAgreementContext().pipe(
      map(() => {
        this.cookieValid = true;
        this.userContextCookieService.setUserContextCookieStatus(true);
        return this.cookieValid;
      }),
      catchError(() => {
        this.cookieValid = false;
        return of(this.cookieValid);
      }),
    );
  }
}

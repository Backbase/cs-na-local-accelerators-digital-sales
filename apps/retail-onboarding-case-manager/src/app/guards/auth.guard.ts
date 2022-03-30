import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private oAuthService: OAuthService) {}

  canActivate(): boolean {
    if (!environment.oauth0) return true;

    if (this.oAuthService.hasValidAccessToken()) {
      return true;
    }
    this.oAuthService.initLoginFlow();
    return false;
  }
}

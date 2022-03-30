import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private oAuthService: OAuthService) {}

  logout() {
    this.oAuthService.revokeTokenAndLogout();
  }
}

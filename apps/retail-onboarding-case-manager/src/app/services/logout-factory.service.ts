import { OAuthService } from 'angular-oauth2-oidc';

export const logoutFactoryService = (oAuthService: OAuthService) => {
  return {
    goToLoginPage: () => oAuthService.initLoginFlow(),
    logout: () => oAuthService.revokeTokenAndLogout(),
  };
};

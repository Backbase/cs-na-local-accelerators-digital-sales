export const environment = {
  production: false,
  apiRoot: '/api/',
  oauth0: false,
  withUserContext: false,
  contextSwitchedUrl: '',
  landingPageUrl: '/',
  authConfig: {
    issuer: '',
    redirectUri: window.location.origin,
    clientId: 'bb-web-client',
    responseType: 'code',
    scope: 'openid',
    requireHttps: false,
    showDebugInformation: true,
    logoutUrl: window.location.origin,
  },
};

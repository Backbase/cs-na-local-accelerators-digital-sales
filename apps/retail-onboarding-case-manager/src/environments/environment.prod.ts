const withUserContext = ('${WITH_USER_CONTEXT}' ?? 'true').toLowerCase() === 'true';
const redirectPath = withUserContext ? '/select-context' : '/';

export const environment = {
  production: true,
  apiRoot: '${API_ROOT}',
  oauth0: true,
  withUserContext,
  contextSwitchedUrl: '/context-switched',
  landingPageUrl: '/',
  authConfig: {
    issuer: '${AUTH_URL}/realms/${AUTH_REALM}',
    redirectUri: '${PROTOCOL}//${HOSTNAME}${BASE_HREF}' + redirectPath,
    clientId: '${AUTH_CLIENT_ID}',
    responseType: 'code',
    scope: '${AUTH_SCOPE}',
    requireHttps: false,
    showDebugInformation: true,
    logoutUrl: '${PROTOCOL}//${HOSTNAME}${BASE_HREF}',
  },
};

import { Environment } from './type';

export const environment: Environment = {
  production: true,
  'co-applicant': true,
  apiRoot: '${API_ROOT}',
  getStartedUrl: 'http://${HOSTNAME}/retail-onboarding',
};

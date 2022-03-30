import { environment } from '../../environments/environment';

const actionConfig = {
  'submit-anchor-data': { updateCdo: true },
  'submit-address': { updateCdo: true },
  'agree-to-terms': { updateCdo: true },
  'empty-handler': { updateCdo: false },
  'fetch-co-applicant-data': { updateCdo: false },
  'select-products': { updateCdo: true },
  'submit-ssn': { updateCdo: true },
  'account-type-selector': { updateCdo: true },
  'setup-credentials': { updateCdo: true },
  'submit-kyc-data': { updateCdo: true },
  'kyc-questions-loader': { updateCdo: false },
  'request-otp': { updateCdo: true },
  'verify-otp': { updateCdo: true },
  'identity-verification-initiation': { updateCdo: false },
  'identity-verification-result': { updateCdo: false },
  'citizenship-selector': { updateCdo: false },
  'fetch-citizenship-data': { updateCdo: false },
  'submit-non-resident-data': { updateCdo: true },
};

const steps = {
  init: ['init'],
  'anchor-data': ['anchor-data'],
  address: ['address'],
  'otp-verification': ['otp-verification'],
  'identity-verification': ['identity-verification'],
  'terms-and-conditions': ['terms-and-conditions'],
  'select-products': ['select-products'],
  welcome: ['fetch-co-applicant-data'],
  'co-applicant': ['co-applicant'],
  'co-applicant-data': ['co-applicant-data'],
  'co-applicant-address': ['co-applicant-address'],
  credentials: ['credentials'],
  kyc: ['kyc'],
  'successfully-done': ['successfully-done'],
  'successfully-done-co-applicant': ['successfully-done-co-applicant'],
  'in-review-done': ['in-review-done'],
  retry: ['retry'],
  declined: ['declined'],
  citizenship: ['citizenship'],
  ssn: ['ssn'],
  'non-resident-data': ['non-resident-data'],
};

const serviceConfig = {
  apiVersion: 'v2',
  servicePath: 'us-onboarding/client-api/interaction',
  deploymentPath: 'interactions',
  apiRoot: environment.apiRoot,
};

export const flowInteractionCoreConfig = {
  moduleConfig: {
    actionConfig,
    steps,
  },
  serviceConfig,
};

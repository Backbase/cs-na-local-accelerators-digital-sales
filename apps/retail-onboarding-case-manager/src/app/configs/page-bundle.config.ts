import { PageBundleConfig, PAGE_BUNDLE_CONFIG } from '@backbase/ds-core-ang/services';

export const journeyBundleConfig = {
  interaction: {
    journeyName: 'onboarding',
    servicePath: 'us-onboarding/client-api/interaction',
    apiVersion: 'v2',
    deploymentPath: 'interactions',
  },
  platform: {
    caseData: {
      servicePath: '/us-onboarding',
    },
    comments: {
      servicePath: '/us-onboarding',
    },
    iam: {
      servicePath: '/us-onboarding',
    },
    process: {
      servicePath: '/us-onboarding',
    },
  },
} as PageBundleConfig;

export const pageBundleProvider = {
  provide: PAGE_BUNDLE_CONFIG,
  useValue: journeyBundleConfig,
};

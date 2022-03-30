import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface DsRetailStartCaseJourneyConfiguration {
  apiVersion?: string;
  servicePath?: string;
  deploymentPath?: string;
  interactionName?: string;
  customClassName?: string;
}

export const DS_RETAIL_START_CASE_JOURNEY_CONFIGURATION = new InjectionToken<DsRetailStartCaseJourneyConfiguration>(
  'DsRetailStartCaseJourneyConfiguration injection token',
);

const configDefault: Required<DsRetailStartCaseJourneyConfiguration> = {
  apiVersion: 'v2',
  servicePath: 'us-onboarding/client-api/interaction',
  deploymentPath: 'interactions',
  interactionName: 'in-branch-onboarding',
  customClassName: '',
};

@Injectable()
export class DsRetailStartCaseJourneyConfigurationService {
  private config: Required<DsRetailStartCaseJourneyConfiguration>;

  constructor(
    @Optional()
    @Inject(DS_RETAIL_START_CASE_JOURNEY_CONFIGURATION)
    config: DsRetailStartCaseJourneyConfiguration,
  ) {
    this.config = { ...configDefault, ...config };
  }

  get defaults(): Partial<DsRetailStartCaseJourneyConfiguration> {
    return configDefault;
  }

  get journeyConfig(): Required<DsRetailStartCaseJourneyConfiguration> {
    return this.config;
  }
}

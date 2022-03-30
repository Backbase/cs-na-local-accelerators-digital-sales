import { NgModule } from '@angular/core';

import {
  DashboardJourneyModule,
  DashboardJourneyConfiguration,
  dashboardJourneyConfigurationToken,
} from '@backbase/case-manager-ang/dashboard';
import { pageBundleProvider } from '../../configs/page-bundle.config';

const journeyProperties = {
  taskCountSummary: {
    processDefinitionId: 'us-onboarding',
    title: 'Task Progress',
  },
  liveInsights: {
    caseDefinitionKey: 'onboarding@1',
  },
} as DashboardJourneyConfiguration;

@NgModule({
  imports: [DashboardJourneyModule.forRoot()],
  providers: [
    pageBundleProvider,
    {
      provide: dashboardJourneyConfigurationToken,
      useValue: journeyProperties,
    },
  ],
})
export class DashboardJourneyBundleModule {}

import { NgModule } from '@angular/core';
import {
  InsightsDashboardJourneyModule,
  InsightsDashboardJourneyConfigurationToken,
} from '@backbase/case-manager-ang/insights-dashboard';
import { pageBundleProvider } from '../../configs/page-bundle.config';

@NgModule({
  imports: [InsightsDashboardJourneyModule.forRoot()],
  providers: [
    pageBundleProvider,
    {
      provide: InsightsDashboardJourneyConfigurationToken,
      useValue: {
        processInsights: {
          caseDefinitionKey: 'onboarding',
          journeyName: 'onboarding',
        },
      },
    },
  ],
})
export class InsightsDashboardBundleModule {}

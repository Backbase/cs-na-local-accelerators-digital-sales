import { NgModule } from '@angular/core';
import {
  CaseViewDefinitionConfiguration,
  OverviewViewConfiguration,
  OverviewViewModule,
  OVERVIEW_VIEW_CONFIGURATION,
} from '@backbase/case-manager-ang/case-overview';
import { usoCaseDataViewDefinition } from 'apps/retail-onboarding-case-manager/src/assets/view-definitions/uso-case-data-view-definition';

const viewProperties = {
  caseDataOverview: {
    showApplicants: false,
  },
  applicantsList: {
    showGoToApplicantLink: true,
    showFeature: true,
    navigateToApplicantsRoute: '../applicants',
  },
  eventsAndTasks: {
    navigateToEventsLogRoute: '../events',
  },
} as OverviewViewConfiguration;

@NgModule({
  imports: [OverviewViewModule],
  providers: [
    {
      provide: CaseViewDefinitionConfiguration,
      useValue: usoCaseDataViewDefinition,
    },
    {
      provide: OVERVIEW_VIEW_CONFIGURATION,
      useValue: viewProperties,
    },
  ],
})
export default class OverviewViewBundleModule {}

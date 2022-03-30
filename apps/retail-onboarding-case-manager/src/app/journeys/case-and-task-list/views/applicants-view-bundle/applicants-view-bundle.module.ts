import { NgModule } from '@angular/core';
import {
  ApplicantsViewConfiguration,
  ApplicantsViewDefinitionConfiguration,
  ApplicantsViewModule,
  APPLICANTS_VIEW_CONFIGURATION,
} from '@backbase/case-manager-ang/case-overview';
import { usoCaseDataViewApplicantsDefinition } from '../../../../../assets/view-definitions/uso-case-data-view-applicants-definition';

const viewProperties: ApplicantsViewConfiguration = {
  caseDataOverview: {
    showApplicants: true,
  },
  taskAndEvents: {
    hideFeature: false,
    navigateToEventsLogRoute: '../events',
  },
} as ApplicantsViewConfiguration;

@NgModule({
  imports: [ApplicantsViewModule],
  providers: [
    {
      provide: ApplicantsViewDefinitionConfiguration,
      useValue: usoCaseDataViewApplicantsDefinition,
    },
    {
      provide: APPLICANTS_VIEW_CONFIGURATION,
      useValue: viewProperties,
    },
  ],
})
export default class ApplicantsViewBundleModule {}

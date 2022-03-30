import { NgModule } from '@angular/core';
import {
  DsResponseJourneyAngModule,
  DsResponseJourneyConfiguration,
  DS_RESPONSE_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsResponseJourneyConfiguration = {
  primaryButtonLabel: 'Ok, keep me posted!',
  primaryButtonAction: 'go-to-my-account',
  secondaryButtonLabel: '',
  secondaryButtonAction: '',
  HTMLFilePath: 'assets/documents/successfully-done-co-applicant.txt',
};

@NgModule({
  imports: [DsResponseJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_RESPONSE_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class ResponseSuccessfullyDoneCoApplicantJourneyBundleModule {}

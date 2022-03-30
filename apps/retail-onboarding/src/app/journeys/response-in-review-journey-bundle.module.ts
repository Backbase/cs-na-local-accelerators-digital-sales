import { NgModule } from '@angular/core';
import {
  DsResponseJourneyAngModule,
  DsResponseJourneyConfiguration,
  DS_RESPONSE_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsResponseJourneyConfiguration = {
  primaryButtonLabel: 'Got it',
  primaryButtonAction: 'got-it',
  secondaryButtonLabel: '',
  secondaryButtonAction: '',
  HTMLFilePath: 'assets/documents/in-review-done.txt',
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
export default class ResponseInReviewJourneyBundleModule {}

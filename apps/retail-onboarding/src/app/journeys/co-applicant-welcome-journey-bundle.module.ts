import { NgModule } from '@angular/core';
import {
  DsApplicantWelcomeJourneyAngModule,
  DsApplicantWelcomeJourneyConfiguration,
  DS_APPLICANT_WELCOME_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';
import { environment } from '../../environments/environment';

const journeyConfig: DsApplicantWelcomeJourneyConfiguration = {
  getStartedUrl: environment.getStartedUrl,
  productImage: 'assets/img-small-continue.jpg',
};

@NgModule({
  imports: [DsApplicantWelcomeJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_APPLICANT_WELCOME_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class CoApplicantWelcomeJourneyBundleModule {}

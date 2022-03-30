import { NgModule } from '@angular/core';
import {
  DsTacJourneyAngModule,
  DsTacJourneyConfiguration,
  DS_TAC_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsTacJourneyConfiguration = {
  tncTermsConditionsLinkText: 'Terms and Conditions',
  tncTermsConditionsLinkUrl: 'https://www.backbase.com/',
  tncPrivacyStatementLinkText: 'Privacy Statement',
  tncPrivacyStatementLinkUrl: 'https://www.backbase.com/',
  modalStepImages: [
    'assets/terms-and-conditions/img-walkthrough-1.jpg',
    'assets/terms-and-conditions/img-walkthrough-2.jpg',
    'assets/terms-and-conditions/img-walkthrough-3.jpg',
  ],
};

@NgModule({
  imports: [DsTacJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_TAC_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class TacJourneyBundleModule {}

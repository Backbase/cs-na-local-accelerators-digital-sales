import { NgModule } from '@angular/core';
import {
  DsOtpVerificationJourneyAngModule,
  DsOtpVerificationJourneyConfiguration,
  DS_OTP_VERIFICATION_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/journeys';

const journeyConfig: DsOtpVerificationJourneyConfiguration = {
  countryCodeEditable: false,
  defaultCountryCode: '+1',
  fetchEmailHandler: '',
  header: '',
};

@NgModule({
  imports: [DsOtpVerificationJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_OTP_VERIFICATION_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class OtpVerificationJourneyBundleModule {}

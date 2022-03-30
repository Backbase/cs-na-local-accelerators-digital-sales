import { NgModule } from '@angular/core';
import {
  DsIdentityVerificationJourneyAngModule,
  DsIdentityVerificationJourneyConfiguration,
  DS_IDENTITY_VERIFICATION_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/journeys';

const journeyConfig: DsIdentityVerificationJourneyConfiguration = {
  isIDT: false,
  header: '',
};

@NgModule({
  imports: [DsIdentityVerificationJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_IDENTITY_VERIFICATION_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class IdentityVerificationJourneyBundleModule {}

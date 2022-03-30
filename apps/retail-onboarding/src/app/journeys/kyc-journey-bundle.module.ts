import { NgModule } from '@angular/core';
import {
  DsKycJourneyAngModule,
  DsKycJourneyConfiguration,
  DS_KYC_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsKycJourneyConfiguration = {
  isIDT: false,
  header: '',
};

@NgModule({
  imports: [DsKycJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_KYC_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class KycJourneyBundleModule {}

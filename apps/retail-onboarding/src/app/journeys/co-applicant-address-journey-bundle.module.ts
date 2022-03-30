import { NgModule } from '@angular/core';
import {
  DsRetailAddressJourneyAngModule,
  DsRetailAddressJourneyConfiguration,
  DS_RETAIL_ADRESS_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/journeys';

const journeyConfig: DsRetailAddressJourneyConfiguration = {
  isCoApplicant: true,
  isIDT: false,
  header: '',
  subject: 'co-applicant',
};

@NgModule({
  imports: [DsRetailAddressJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_RETAIL_ADRESS_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class CoApplicantAddressJourneyBundleModule {}

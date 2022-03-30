import { NgModule } from '@angular/core';
import {
  DsResponseDeclinedJourneyAngModule,
  DsResponseDeclinedJourneyConfiguration,
  DS_RESPONSE_DECLINED_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsResponseDeclinedJourneyConfiguration = {
  customerServiceUrl: '',
  localBranchUrl: '',
  productsListUrl: '',
};

@NgModule({
  imports: [DsResponseDeclinedJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_RESPONSE_DECLINED_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class ResponseDeclinedJourneyBundleModule {}

import { NgModule } from '@angular/core';
import {
  DsLoadingJourneyAngModule,
  DsLoadingJourneyConfiguration,
  DS_LOADING_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

const journeyConfig: DsLoadingJourneyConfiguration = {
  actionHandlerName: 'fetch-co-applicant',
};
@NgModule({
  imports: [DsLoadingJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_LOADING_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class LoadingJourneyBundleModule {}

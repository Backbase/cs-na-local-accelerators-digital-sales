import { NgModule } from '@angular/core';
import {
  DsProductSelectionJourneyConfiguration,
  DS_PRODUCT_SELECTION_JOURNEY_CONFIGURATION,
  DsProductSelectionJourneyAngModule,
} from '@backbase/ds-journeys-ang/journeys';

const journeyConfig: DsProductSelectionJourneyConfiguration = {
  query: '{}',
};

@NgModule({
  imports: [DsProductSelectionJourneyAngModule.forRoot()],
  providers: [
    {
      provide: DS_PRODUCT_SELECTION_JOURNEY_CONFIGURATION,
      useValue: journeyConfig,
    },
  ],
})
export default class ProductSelectionJourneyBundleModule {}

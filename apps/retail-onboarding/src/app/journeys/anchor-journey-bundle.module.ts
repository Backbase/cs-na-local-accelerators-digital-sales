import { NgModule } from '@angular/core';

import {
  DsRetailAnchorJourneyAngModule,
  DsRetailAnchorJourneyConfiguration,
  DS_RETAIL_ANCHOR_JOURNEY_CONFIGURATION,
} from '@backbase/ds-journeys-ang/features';

import { dsRetailAnchorJourneyConfig } from '../configs/ds-retail-anchor-journey.config';

const journeyConfig: DsRetailAnchorJourneyConfiguration = {
  form: dsRetailAnchorJourneyConfig,
};

@NgModule({
  imports: [DsRetailAnchorJourneyAngModule.forRoot()],
  providers: [{ provide: DS_RETAIL_ANCHOR_JOURNEY_CONFIGURATION, useValue: journeyConfig }],
})
export default class AnchorJourneyBundleModule {}

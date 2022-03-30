import { NgModule } from '@angular/core';
import { DsSsnJourneyAngModule } from '@backbase/ds-journeys-ang/features';

@NgModule({
  imports: [DsSsnJourneyAngModule.forRoot()],
})
export default class SsnJourneyBundleModule {}

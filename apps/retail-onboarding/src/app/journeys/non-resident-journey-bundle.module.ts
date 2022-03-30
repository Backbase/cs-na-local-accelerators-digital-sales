import { NgModule } from '@angular/core';
import { DsNonResidentJourneyAngModule } from '@backbase/ds-journeys-ang/features';

@NgModule({
  imports: [DsNonResidentJourneyAngModule.forRoot()],
})
export default class NonResidentJourneyBundleModule {}

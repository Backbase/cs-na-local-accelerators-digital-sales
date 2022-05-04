// Angular & 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Backbase
import { LayoutContainerModule } from '@backbase/ds-shared-ang/ui-containers';
import { FlowInteractionCoreModule } from '@backbase/flow-interaction-sdk-ang/core';
import { DsLoadingJourneyAngModule } from '@backbase/ds-journeys-ang/features';

// Local
import { AppComponent } from './app.component';
import { defaultRoutes, coApplicantRoutes } from './app.routes';
import { flowInteractionCoreConfig } from './configs/flow-interaction-core.config';
import { environment } from '../environments/environment';
import { AnalyticsModule } from 'libs/analytics/analytics.module';

const routes: Routes = environment['co-applicant'] ? coApplicantRoutes : defaultRoutes;

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutContainerModule,
    DsLoadingJourneyAngModule,
    FlowInteractionCoreModule.forRoot(flowInteractionCoreConfig.moduleConfig),
    BrowserModule,
    RouterModule.forRoot(routes),
    AnalyticsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

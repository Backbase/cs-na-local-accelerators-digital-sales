import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnoCredentialsJourneyAngComponent } from './ono-credentials-journey-ang.component';
import { LoadButtonModule, ModalModule, ButtonModule } from '@backbase/ui-ang';
import { FormlyUiModule } from '@backbase/ds-shared-ang/ui';
import { Route, provideRoutes } from '@angular/router';
import { FormBuilder } from '@backbase/ds-common-ang';
import { FormlyFormBuilder } from '@ngx-formly/core';

const defaultRoute: Route = {
  path: '',
  component: OnoCredentialsJourneyAngComponent,
};

@NgModule({
  declarations: [OnoCredentialsJourneyAngComponent],
  imports: [CommonModule, LoadButtonModule, ModalModule, ButtonModule, FormlyUiModule],
  providers: [
    {
      provide: FormBuilder,
      useClass: FormlyFormBuilder,
    },
  ],
})
export class OnoCredentialsJourneyAngModule {
  static forRoot(
    data: { [key: string]: unknown; route: Route } = { route: defaultRoute },
  ): ModuleWithProviders<OnoCredentialsJourneyAngModule> {
    return {
      ngModule: OnoCredentialsJourneyAngModule,
      providers: [provideRoutes([data.route])],
    };
  }
}

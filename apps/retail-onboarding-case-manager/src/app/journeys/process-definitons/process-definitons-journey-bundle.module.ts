import { NgModule } from '@angular/core';
import {
  ProcessDefinitionsJourneyConfiguration,
  ProcessDefinitionsJourneyConfigurationToken,
  ProcessDefinitionsJourneyModule,
} from '@backbase/case-manager-ang/process-definitions';
import { pageBundleProvider } from '../../configs/page-bundle.config';

@NgModule({
  imports: [ProcessDefinitionsJourneyModule.forRoot()],
  providers: [
    pageBundleProvider,
    {
      provide: ProcessDefinitionsJourneyConfigurationToken,
      useValue: {
        heading: {
          text: 'Process Definitions',
          type: 'h1',
        },
      } as ProcessDefinitionsJourneyConfiguration,
    },
  ],
})
export class ProcessDefinitionsBundleModule {}

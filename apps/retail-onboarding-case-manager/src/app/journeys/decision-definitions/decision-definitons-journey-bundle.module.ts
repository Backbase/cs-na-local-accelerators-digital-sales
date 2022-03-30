import { NgModule } from '@angular/core';
import {
  DecisionDefinitionsConfiguration,
  DecisionDefinitionsConfigurationToken,
  DecisionDefinitionsJourneyModule,
} from '@backbase/case-manager-ang/decision-definitions';
import { pageBundleProvider } from '../../configs/page-bundle.config';

@NgModule({
  imports: [DecisionDefinitionsJourneyModule.forRoot()],
  providers: [
    pageBundleProvider,
    {
      provide: DecisionDefinitionsConfigurationToken,
      useValue: {
        heading: {
          text: 'Decision Definitions',
          type: 'h1',
        },
      } as DecisionDefinitionsConfiguration,
    },
  ],
})
export class DecisionDefinitionsBundleModule {}

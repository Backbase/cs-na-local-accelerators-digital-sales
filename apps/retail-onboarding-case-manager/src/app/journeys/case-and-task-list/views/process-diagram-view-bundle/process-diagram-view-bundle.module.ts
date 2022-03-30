import { NgModule } from '@angular/core';
import {
  ProcessDiagramViewConfiguration,
  ProcessDiagramViewModule,
  PROCESS_DIAGRAM_VIEW_CONFIGURATION,
} from '@backbase/case-manager-ang/case-overview';

const viewProperties = {
  journeyName: 'onboarding',
  processDefinitionIds: [
    'us-onboarding',
    'aml',
    'idv',
    'citizenship',
    'co-applicant',
    'data-gathering-complete',
    'archive-case',
  ],
} as ProcessDiagramViewConfiguration;

@NgModule({
  imports: [ProcessDiagramViewModule],
  providers: [
    {
      provide: PROCESS_DIAGRAM_VIEW_CONFIGURATION,
      useValue: viewProperties,
    },
  ],
})
export default class DiagramViewBundleModule {}

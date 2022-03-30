import { NgModule } from '@angular/core';
import {
  CaseOverviewListViewModule,
  CASE_OVERVIEW_LIST_VIEW_CONFIG,
  ICaseOverviewListViewConfig,
} from '@backbase/case-manager-ang/case-and-task-list';

@NgModule({
  imports: [CaseOverviewListViewModule],
  providers: [
    {
      provide: CASE_OVERVIEW_LIST_VIEW_CONFIG,
      useValue: {
        caseDefinitionKey: 'onboarding@1',
      } as ICaseOverviewListViewConfig,
    },
  ],
})
export class CaseOverviewListViewBundleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@backbase/ui-ang';

import { TaskDetailsModule, TaskSidebarModule, ViewInteractionModalModule } from '@backbase/case-manager-ang/shared';
import { RetailCaseAndTaskListViewComponent } from './retail-case-and-task-list.component';
import { DsRetailStartCaseJourneyAngModule } from '@backbase/ds-retail-start-case-journey-ang';
import { TabContainerModule } from '@backbase/ds-shared-ang/ui-containers';

@NgModule({
  declarations: [RetailCaseAndTaskListViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    TaskSidebarModule,
    TabContainerModule,
    TaskDetailsModule,
    ViewInteractionModalModule,
    DsRetailStartCaseJourneyAngModule,
  ],
})
export class RetailCaseAndTaskListViewModule {}

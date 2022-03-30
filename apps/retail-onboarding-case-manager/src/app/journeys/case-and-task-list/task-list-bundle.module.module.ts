import { NgModule } from '@angular/core';
import { CaseTaskListViewModule } from '@backbase/case-manager-ang/case-and-task-list';
import { TasksViewConfiguration, TASKS_VIEW_CONFIGURATION } from '@backbase/case-manager-ang/case-overview';

const viewProperties: TasksViewConfiguration = {
  taskListDone: { showFeature: true },
  taskListOpen: { showFeature: true },
} as TasksViewConfiguration;

@NgModule({
  imports: [CaseTaskListViewModule],
  providers: [
    {
      provide: TASKS_VIEW_CONFIGURATION,
      useValue: viewProperties,
    },
  ],
})
export class CaseTaskListViewBundleModule {}

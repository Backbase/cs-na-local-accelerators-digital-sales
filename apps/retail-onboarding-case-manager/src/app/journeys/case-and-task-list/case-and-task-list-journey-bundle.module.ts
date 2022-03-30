import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {
  CaseAndTaskListConfiguration,
  CaseAndTaskListJourneyModule,
  CASE_AND_TASK_CONFIGURATION,
} from '@backbase/case-manager-ang/case-and-task-list';

import { pageBundleProvider } from '../../configs/page-bundle.config';
import { RetailCaseAndTaskListViewComponent } from './overrides/retail-case-and-task-list/retail-case-and-task-list.component';
import { RetailCaseAndTaskListViewModule } from './overrides/retail-case-and-task-list/retail-case-and-task-list.module';

const routes: Routes = [
  {
    path: '',
    component: RetailCaseAndTaskListViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cases',
      },
      {
        path: 'cases',
        loadChildren: () =>
          import('./case-overview-list-bundle.module').then((m) => m.CaseOverviewListViewBundleModule),
      },
      {
        path: 'tasks',
        loadChildren: () => import('./task-list-bundle.module.module').then((m) => m.CaseTaskListViewBundleModule),
      },
    ],
  },
  {
    path: 'case',
    loadChildren: () => import('./case-overview-journey-bundle.module').then((m) => m.CaseOverviewJourneyBundleModule),
  },
];

export const journeyProperties = {
  heading: {
    type: 'h1',
    text: 'Retail Onboarding',
  },
  tabItems: [
    {
      label: 'Cases',
      path: 'cases',
    },
    {
      label: 'Tasks',
      path: 'tasks',
    },
  ],
} as CaseAndTaskListConfiguration;

@NgModule({
  imports: [RetailCaseAndTaskListViewModule, CaseAndTaskListJourneyModule.forRoot({ routes })],
  providers: [
    pageBundleProvider,
    {
      provide: CASE_AND_TASK_CONFIGURATION,
      useValue: journeyProperties,
    },
  ],
})
export class CaseAndTaskListJourneyBundleModule {}

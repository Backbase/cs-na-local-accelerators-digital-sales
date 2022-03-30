import { NgModule } from '@angular/core';
import {
  CaseOverviewConfigService,
  CaseOverviewJourneyComponent,
  CaseOverviewJourneyModule,
  CASE_OVERVIEW_CONFIGURATION,
} from '@backbase/case-manager-ang/case-overview';
import { Routes } from '@angular/router';
import { pageBundleProvider } from '../../configs/page-bundle.config';

const routes: Routes = [
  {
    path: '',
    component: CaseOverviewJourneyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        loadChildren: () => import('./views/overview-view-bundle/overview-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'applicants',
        loadChildren: () =>
          import('./views/applicants-view-bundle/applicants-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'tasks',
        loadChildren: () => import('./views/tasks-view-bundle/tasks-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'diagram',
        loadChildren: () =>
          import('./views/process-diagram-view-bundle/process-diagram-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'documents',
        loadChildren: () => import('./views/documents-view-bundle/documents-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./views/event-logs-view-bundle/event-logs-view-bundle.module').then((m) => m.default),
      },
      {
        path: 'comments',
        loadChildren: () => import('./views/comments-view-bundle/comments-view-bundle.module').then((m) => m.default),
      },
    ],
  },
];

const journeyProperties = {
  tabItems: [
    {
      label: 'Overview',
      path: 'overview',
    },
    {
      label: 'Applicants',
      path: 'applicants',
    },
    {
      label: 'Tasks',
      path: 'tasks',
    },
    {
      label: 'Diagram',
      path: 'diagram',
    },
    {
      label: 'Documents',
      path: 'documents',
    },
    {
      label: 'Comments',
      path: 'comments',
    },
    {
      label: 'Event Logs',
      path: 'events',
    },
  ],
} as CaseOverviewConfigService;

@NgModule({
  imports: [CaseOverviewJourneyModule.forRoot({ routes })],
  providers: [
    pageBundleProvider,
    {
      provide: CASE_OVERVIEW_CONFIGURATION,
      useValue: journeyProperties,
    },
  ],
})
export class CaseOverviewJourneyBundleModule {}

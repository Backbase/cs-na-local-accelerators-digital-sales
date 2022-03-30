import { Component } from '@angular/core';
import {
  CaseAndTaskListConfigService,
  CaseAndTaskListViewComponent,
} from '@backbase/case-manager-ang/case-and-task-list';

@Component({
  selector: 'bb-cm-retail-onboarding-view',
  template: `
    <section class="d-block" data-role="layout" data-testid="case-and-task-list">
      <header class="d-flex justify-content-between p-0">
        <bb-header-ui
          [headingType]="heading?.type"
          [heading]="heading?.text"
          data-testid="business-onboarding-header"
        ></bb-header-ui>
        <bb-ds-retail-start-case-journey-ang></bb-ds-retail-start-case-journey-ang>
      </header>

      <bb-ds-tab-container [tabItems]="tabItemsConfiguration" data-role="tab-list" data-testid="case-task-tab-list">
        <router-outlet></router-outlet>
      </bb-ds-tab-container>
    </section>

    <bb-cm-view-interaction-modal></bb-cm-view-interaction-modal>
    <bb-cm-task-sidebar></bb-cm-task-sidebar>
  `,
  providers: [CaseAndTaskListConfigService],
})
export class RetailCaseAndTaskListViewComponent extends CaseAndTaskListViewComponent {}

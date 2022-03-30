import { Component, OnInit } from '@angular/core';
import { FlowInteractionService } from '@backbase/flow-interaction-sdk-ang/core';
import { BehaviorSubject } from 'rxjs';
import { dsLayoutContainerConfig } from './configs/ds-layout-container.config';
import { flowInteractionCoreConfig } from './configs/flow-interaction-core.config';
import { environment } from '../environments/environment';
import { Step } from '@backbase/ds-shared-ang/ui';

const findStepName = (steps: Step[], path: string): string =>
  steps.map((step: Step) => findName(step, path)).find((foundName) => foundName) || '';
const findName = (data: Step, path: string): string =>
  data.name.find((name: string) => name === path) || (data.children ? findStepName(data.children || [], path) : '');

@Component({
  selector: 'bb-retail-onboarding',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  serviceConfig = flowInteractionCoreConfig.serviceConfig;
  interactionName = dsLayoutContainerConfig.interactionName;
  steps = dsLayoutContainerConfig.steps;
  stepName = findStepName(this.steps[this.interactionName], location.pathname.substring(1));
  isProduction = environment['production'];
  isWelcome = environment['co-applicant'];
  display: boolean = !this.isProduction || this.isWelcome || false;
  currentStep$ = new BehaviorSubject((!this.isProduction && this.stepName) || dsLayoutContainerConfig.initialStep);

  constructor(private flowInteractionService: FlowInteractionService) {
    this.flowInteractionService.init(this.serviceConfig, this.interactionName);
  }
  ngOnInit(): void {
    this.flowInteractionService.nav.currentStep$.subscribe((s) => {
      if (s && s.name) {
        console.log(`navigated to ${s.name}`);
        this.currentStep$.next(s.name);
        this.display = true;
      }
    });
  }
}

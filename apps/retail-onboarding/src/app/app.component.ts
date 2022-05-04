import { Component, OnInit, HostListener } from '@angular/core';
import { FlowInteractionService } from '@backbase/flow-interaction-sdk-ang/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { dsLayoutContainerConfig } from './configs/ds-layout-container.config';
import { flowInteractionCoreConfig } from './configs/flow-interaction-core.config';
import { environment } from '../environments/environment';
import { Step } from '@backbase/ds-shared-ang/ui';
import { TagManagerService } from 'libs/analytics/tag-manager.service';
import { UserInactivityService } from 'libs/analytics/user-inactivity.service';

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

  @HostListener('window:keydown')
  @HostListener('window:mousedown')
  @HostListener('window:mousemove')
  checkUserActivity() {
    clearTimeout(this._userInactivityService.timeoutId);
    this._userInactivityService.checkTimeOut();
  }

  constructor(
    private flowInteractionService: FlowInteractionService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _tagManagerService: TagManagerService,
    private readonly _userInactivityService: UserInactivityService,
  ) {

    this.flowInteractionService.init(this.serviceConfig, this.interactionName);

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rawURL = event.urlAfterRedirects;
        const queryParams = this._route.snapshot.queryParams;
        const route = rawURL.split(/[/?]/)[1];

        /* Send pageview event */
        this._tagManagerService.triggerPageView(route, queryParams);
      }
    });
  }
  ngOnInit(): void {
    this.flowInteractionService.nav.currentStep$.subscribe((s) => {
      if (s && s.name) {
        console.log(`navigated to ${s.name}`);
        this.currentStep$.next(s.name);
        this.display = true;
      }
    });

    this._tagManagerService.initGTM();
  }
}

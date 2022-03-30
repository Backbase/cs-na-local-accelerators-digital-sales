import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageConfig, PAGE_CONFIG } from '@backbase/ds-core-ang/services';
import { FlowInteractionService } from '@backbase/flow-interaction-sdk-ang/core';
import { DsRetailStartCaseJourneyConfigurationService } from './services/ds-retail-start-case-journey-configuration.service';

@Component({
  selector: 'bb-ds-retail-start-case-journey-ang',
  templateUrl: './ds-retail-start-case-journey-ang.component.html',
})
export class DsRetailStartCaseJourneyAngComponent {
  currentStep = 'select-products';
  isModalOpen = false;

  @Input() apiVersion: string;
  @Input() servicePath: string;
  @Input() deploymentPath: string;
  @Input() interactionName: string;
  @Input() customClassName?: string;

  constructor(
    private flowInteractionService: FlowInteractionService,
    private readonly _journeyConfigService: DsRetailStartCaseJourneyConfigurationService,
    private router: Router,
    @Inject(PAGE_CONFIG)
    private readonly pageConfig: PageConfig,
  ) {
    this.apiVersion = this._journeyConfigService.journeyConfig.apiVersion;
    this.servicePath = this._journeyConfigService.journeyConfig.servicePath;
    this.deploymentPath = this._journeyConfigService.journeyConfig.deploymentPath;
    this.interactionName = this._journeyConfigService.journeyConfig.interactionName;
    this.customClassName = this._journeyConfigService.journeyConfig.customClassName;
  }

  openModal(): void {
    this.flowInteractionService.init(
      {
        apiVersion: this.apiVersion,
        servicePath: this.servicePath,
        deploymentPath: this.deploymentPath,
        apiRoot: this.pageConfig.apiRoot,
      },
      this.interactionName,
    );

    this.isModalOpen = true;
  }

  goToStep(step: string): void {
    if (!step) return;
    this.currentStep = step;
  }

  async finish(): Promise<void> {
    const response = await this.flowInteractionService.call({ action: 'submit-in-branch', body: {} }).toPromise();
    if (response && response.actionErrors && response.actionErrors.length) {
      // TODO: error handling -- MT
      return;
    }
    const caseId = response.body.caseKey;
    this.closeModal();
    this.router.navigate(['/retail-onboarding/case/overview'], {
      queryParams: {
        caseInstance: caseId,
      },
      queryParamsHandling: 'merge',
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.currentStep = 'select-products';
  }
}

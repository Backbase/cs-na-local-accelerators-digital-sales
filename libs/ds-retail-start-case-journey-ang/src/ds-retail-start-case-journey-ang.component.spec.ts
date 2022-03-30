import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PAGE_CONFIG } from '@backbase/ds-core-ang/services';
import { FlowInteractionService } from '@backbase/flow-interaction-sdk-ang/core';

import { DsRetailStartCaseJourneyAngComponent } from './ds-retail-start-case-journey-ang.component';
import { DsRetailStartCaseJourneyConfigurationService } from './services/ds-retail-start-case-journey-configuration.service';

describe('DsRetailStartCaseJourneyAngComponent', () => {
  let component: DsRetailStartCaseJourneyAngComponent;
  let fixture: ComponentFixture<DsRetailStartCaseJourneyAngComponent>;
  let fakeFlowInteractionService: Pick<FlowInteractionService, 'init' | 'call'>;

  beforeEach(async () => {
    fakeFlowInteractionService = jasmine.createSpyObj('FlowInteractionService', {
      init: jasmine.createSpy('init').and.callThrough(),
      call: jasmine.createSpy('call').and.callThrough(),
    });

    await TestBed.configureTestingModule({
      declarations: [DsRetailStartCaseJourneyAngComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: FlowInteractionService, useValue: fakeFlowInteractionService },
        {
          provide: PAGE_CONFIG,
          useValue: {
            apiRoot: '/gateway/api/',
          },
        },
        DsRetailStartCaseJourneyConfigurationService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DsRetailStartCaseJourneyAngComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.currentStep).toBe('select-products');
    expect(component.isModalOpen).toBeFalsy();
  });

  it('should initialise the service and open the modal', () => {
    component.openModal();
    expect(fakeFlowInteractionService.init).toHaveBeenCalled();
    expect(component.isModalOpen).toBeTruthy();
  });

  it('should go to next step', () => {
    component.goToStep('personal-info');
    expect(component.currentStep).toBe('personal-info');
  });

  it('should close the modal', () => {
    component.closeModal();
    expect(component.currentStep).toBe('select-products');
    expect(component.isModalOpen).toBeFalsy();
  });
});

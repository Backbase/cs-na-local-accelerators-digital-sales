import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsRetailStartCaseJourneyAngComponent } from './ds-retail-start-case-journey-ang.component';
import { ButtonModule, LoadButtonModule, ModalModule } from '@backbase/ui-ang';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { FormlyUiModule } from '@backbase/ds-shared-ang/ui';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { DsRetailStartCaseJourneyConfigurationService } from './services/ds-retail-start-case-journey-configuration.service';

@NgModule({
  declarations: [PersonalInformationComponent, ProductSelectionComponent, DsRetailStartCaseJourneyAngComponent],
  imports: [
    CommonModule,
    ButtonModule,
    LoadButtonModule,
    ModalModule,
    FormlyUiModule,
    BackbaseCoreModule.withConfig({
      classMap: { DsRetailStartCaseJourneyAngComponent },
    }),
  ],
  providers: [DsRetailStartCaseJourneyConfigurationService],
  exports: [DsRetailStartCaseJourneyAngComponent],
})
export class DsRetailStartCaseJourneyAngModule {}

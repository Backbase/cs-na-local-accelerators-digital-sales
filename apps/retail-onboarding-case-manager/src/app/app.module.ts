// Angular & 3rd party
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfig, OAuthModule, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Backbase
import { HeaderTopbarModule, INTERACTIONS_WITH_STEPS } from '@backbase/case-manager-ang/shared';
import { LayoutModule, LogoModule } from '@backbase/ui-ang';
import { MainNavigationContainerModule } from '@backbase/ds-shared-ang/ui-containers';
import { DsLogoutModule } from '@backbase/ds-shared-ang/features';
import { TemplateRegistry } from '@backbase/foundation-ang/core';
import { CASE_DATA_MAPPER, CoreAngModule, PAGE_CONFIG } from '@backbase/ds-core-ang/services';
import { LOGOUT } from '@backbase/foundation-ang/web-sdk';
import { ACCESS_CONTROL_BASE_PATH } from '@backbase/data-ang/accesscontrol';
import { USER_BASE_PATH } from '@backbase/data-ang/user';
import { UserContextMenuWidgetModule } from '@backbase/user-context-menu-widget-ang';
import {
  DsCitizenshipStatusTaskViewAngModule,
  DsKycTaskViewModule,
  DsNonResidentTaskViewModule,
} from '@backbase/ds-journeys-ang/features';
import {
  DsRetailAddressValidationTaskViewModule,
  DsIdentityVerificationResultsTaskViewModule,
  DsIdentityVerificationTaskViewModule,
  DsAmlResultsTaskViewModule,
} from '@backbase/ds-journeys-ang/journeys';

// Local
import { AppComponent } from './app.component';

// Configs
import { layoutConfig } from './configs/layout.config';
import { idtSteps } from './configs/interactions.config';
import { environment } from '../environments/environment';

// Services
import { CaseDataMapperService } from './services/case-data-mapper.service';
import { logoutFactoryService } from './services/logout-factory.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { UserContextGuard } from './guards/user-context.guard';

const msaRelatedRoutes = [
  {
    path: 'context-switched',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'select-context',
    loadChildren: () =>
      import('./features/select-context/select-context.module').then((mod) => mod.SelectContextModule),
    canActivate: [AuthGuard],
  },
];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: async () =>
      (await import('./journeys/dashboard/dashboard-journey-bundle.module')).DashboardJourneyBundleModule,
    canActivate: [AuthGuard, UserContextGuard],
  },
  {
    path: 'retail-onboarding',
    loadChildren: async () =>
      (await import('./journeys/case-and-task-list/case-and-task-list-journey-bundle.module'))
        .CaseAndTaskListJourneyBundleModule,
    canActivate: [AuthGuard, UserContextGuard],
  },
  {
    path: 'insights-dashboard',
    loadChildren: async () =>
      (await import('./journeys/insights-dashboard/insights-dashboard-journey-bundle.module'))
        .InsightsDashboardBundleModule,
    canActivate: [AuthGuard, UserContextGuard],
  },
  {
    path: 'process-definitions',
    loadChildren: async () =>
      (await import('./journeys/process-definitons/process-definitons-journey-bundle.module'))
        .ProcessDefinitionsBundleModule,
    canActivate: [AuthGuard, UserContextGuard],
  },
  {
    path: 'decision-definitions',
    loadChildren: async () =>
      (await import('./journeys/decision-definitions/decision-definitons-journey-bundle.module'))
        .DecisionDefinitionsBundleModule,
    canActivate: [AuthGuard, UserContextGuard],
  },
  ...(environment.withUserContext ? msaRelatedRoutes : []),
];

const msaProviders = [
  TemplateRegistry,
  {
    provide: ACCESS_CONTROL_BASE_PATH,
    useValue: environment.apiRoot + '/access-control',
  },
  {
    provide: USER_BASE_PATH,
    useValue: environment.apiRoot + '/user-manager',
  },
  {
    provide: LOGOUT,
    useFactory: logoutFactoryService,
    deps: [OAuthService],
  },
];

const authProviders = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [OAuthService],
    useFactory: (oAuthService: OAuthService) => () =>
      oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => oAuthService.setupAutomaticSilentRefresh()),
  },
  {
    provide: AuthConfig,
    useValue: environment.authConfig,
  },
  { provide: OAuthStorage, useFactory: () => localStorage },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HeaderTopbarModule,
    LayoutModule,
    MainNavigationContainerModule.forRoot(layoutConfig),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.apiRoot],
        sendAccessToken: true,
      },
    }),
    CoreAngModule.forRoot(),
    HttpClientModule,
    NgbModule,
    UserContextMenuWidgetModule,
    DsLogoutModule,
    LogoModule,
    DsRetailAddressValidationTaskViewModule,
    DsCitizenshipStatusTaskViewAngModule,
    DsKycTaskViewModule,
    DsIdentityVerificationResultsTaskViewModule,
    DsAmlResultsTaskViewModule,
    DsIdentityVerificationTaskViewModule,
    DsNonResidentTaskViewModule,
  ],
  providers: [
    environment.withUserContext ? msaProviders : [],
    environment.oauth0 ? authProviders : [],
    {
      provide: PAGE_CONFIG,
      useValue: {
        apiRoot: environment.apiRoot,
      },
    },
    {
      provide: INTERACTIONS_WITH_STEPS,
      useValue: idtSteps,
    },
    {
      provide: CASE_DATA_MAPPER,
      useClass: CaseDataMapperService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

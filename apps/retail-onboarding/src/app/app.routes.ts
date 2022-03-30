import { Routes } from '@angular/router';

const defaultRoutes: Routes = [
  {
    path: 'init',
    loadChildren: () => import('./journeys/loading-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'select-products',
    loadChildren: () => import('./journeys/product-selection-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'anchor-data',
    loadChildren: () => import('./journeys/anchor-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./journeys/tac-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'co-applicant',
    loadChildren: () => import('./journeys/add-applicant-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'co-applicant-data',
    loadChildren: () => import('./journeys/co-applicant-anchor-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'co-applicant-address',
    loadChildren: () => import('./journeys/co-applicant-address-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'citizenship',
    loadChildren: () => import('./journeys/citizenship-selector-widget-bundle.module').then((m) => m.default),
  },
  {
    path: 'ssn',
    loadChildren: () => import('./journeys/ssn-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'non-resident-data',
    loadChildren: () => import('./journeys/non-resident-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'kyc',
    loadChildren: () => import('./journeys/kyc-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'credentials',
    loadChildren: () => import('./journeys/credentials-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'successfully-done',
    loadChildren: () => import('./journeys/response-successfully-done-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'successfully-done-co-applicant',
    loadChildren: () =>
      import('./journeys/response-successfully-done-co-applicant-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'in-review-done',
    loadChildren: () => import('./journeys/response-in-review-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'declined',
    loadChildren: () => import('./journeys/response-declined-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./journeys/otp-verification-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'identity-verification',
    loadChildren: () => import('./journeys/identity-verification-journey-bundle.module').then((m) => m.default),
  },
  {
    path: 'address',
    loadChildren: () => import('./journeys/address-journey-bundle.module').then((m) => m.default),
  },
  { path: '**', redirectTo: 'init' },
];

const coApplicantRoutes = [
  {
    path: 'welcome',
    loadChildren: () => import('./journeys/co-applicant-welcome-journey-bundle.module').then((m) => m.default),
  },
  { path: '**', redirectTo: 'welcome' },
];

export { defaultRoutes, coApplicantRoutes };

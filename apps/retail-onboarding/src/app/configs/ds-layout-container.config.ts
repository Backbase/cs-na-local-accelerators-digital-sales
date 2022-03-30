import { Step } from '@backbase/ds-shared-ang/ui';
import { environment } from '../../environments/environment';

const assetsPath = 'assets/background';
let initialStep = 'init';
let interactionName = 'onboarding';
let LABELS: Step[] = [
  {
    name: ['init'],
    label: ``,
    headline: ``,
    backgroundImages: {
      large: `${assetsPath}/img-large-step2.jpg`,
      medium: `${assetsPath}/img-medium-step2.jpg`,
      small: '',
    },
  },
  {
    name: ['select-products'],
    label: $localize`:@@uso-nav.select-products.label:Saving account`,
    headline: $localize`:@@uso-nav.select-products.headline:Start saving your money`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step2.jpg`,
      medium: `${assetsPath}/img-medium-step2.jpg`,
      small: '',
    },
  },
  {
    name: ['terms-and-conditions'],
    label: '',
    headline: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-step1.jpg`,
      medium: `${assetsPath}/img-medium-step1.jpg`,
      small: '',
    },
  },
  {
    name: ['anchor-data'],
    label: $localize`:@@uso-nav.anchor-data.label:Personal details`,
    headline: $localize`:@@uso-nav.anchor-data.headline:Nice to meet you`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step1.jpg`,
      medium: `${assetsPath}/img-medium-step1.jpg`,
      small: '',
    },
  },
  {
    name: ['otp-verification'],
    label: $localize`:@@uso-nav.otp-verification.label:Account verification`,
    headline: $localize`:@@uso-nav.otp-verification.headline:Let's secure your account`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step6.jpg`,
      medium: `${assetsPath}/img-medium-step6.jpg`,
      small: '',
    },
  },
  {
    name: ['identity-verification'],
    label: $localize`:@@uso-nav.identity-verification.label:ID protection`,
    headline: $localize`:@@uso-nav.identity-verification.headline:Smile for the camera`,
    backgroundImages: {
      large: `${assetsPath}/img-large-IDV.jpg`,
      medium: `${assetsPath}/img-medium-IDV.jpg`,
      small: '',
    },
  },
  {
    name: ['address'],
    label: $localize`:@@uso-nav.address.label:Your address`,
    headline: $localize`:@@uso-nav.address.headline:Your address`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step2.jpg`,
      medium: `${assetsPath}/img-medium-step2.jpg`,
      small: '',
    },
  },
  {
    name: ['co-applicant'],
    label: $localize`:@@uso-nav.co-applicant.label:Applicants`,
    headline: $localize`:@@uso-nav.co-applicant.headline:Applicants`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step2.jpg`,
      medium: `${assetsPath}/img-medium-step2.jpg`,
      small: '',
    },
    children: [
      {
        name: ['co-applicant-data'],
        label: $localize`:@@uso-nav.co-applicant-data.label:Details`,
        headline: $localize`:@@uso-nav.co-applicant-data.headline:Co-applicant details`,
        backgroundImages: {
          large: `${assetsPath}/img-large-step1.jpg`,
          medium: `${assetsPath}/img-medium-step1.jpg`,
          small: '',
        },
      },
      {
        name: ['co-applicant-address'],
        label: $localize`:@@uso-nav.co-applicant-address.label:Address`,
        headline: $localize`:@@uso-nav.co-applicant-address.headline:Co-applicant address`,
        backgroundImages: {
          large: `${assetsPath}/img-large-step2.jpg`,
          medium: `${assetsPath}/img-medium-step2.jpg`,
          small: '',
        },
      },
    ],
  },
  {
    name: ['citizenship'],
    label: $localize`:@@uso-nav.citizenship.label:Citizenship`,
    headline: $localize`:@@uso-nav.citizenship.headline:Let’s verify your citizenship`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step3.jpg`,
      medium: `${assetsPath}/img-medium-step3.jpg`,
      small: '',
    },
    children: [
      {
        name: ['ssn', 'non-resident-data'],
        label: $localize`:@@uso-nav.ssn.label:Citizenship details`,
        headline: $localize`:@@uso-nav.ssn.headline:Let’s verify your citizenship`,
        backgroundImages: {
          large: `${assetsPath}/img-large-step3.jpg`,
          medium: `${assetsPath}/img-medium-step3.jpg`,
          small: '',
        },
      },
    ],
  },
  {
    name: ['kyc'],
    label: $localize`:@@uso-nav.kyc.label:Additional information`,
    headline: $localize`:@@uso-nav.kyc.headline:Your occupation`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step6.jpg`,
      medium: `${assetsPath}/img-medium-step6.jpg`,
      small: '',
    },
  },
  {
    name: ['credentials'],
    label: $localize`:@@uso-nav.credentials.label:Create a password`,
    headline: $localize`:@@uso-nav.credentials.headline:Create a password`,
    backgroundImages: {
      large: `${assetsPath}/img-large-step2.jpg`,
      medium: `${assetsPath}/img-medium-step2.jpg`,
      small: '',
    },
  },
  {
    name: ['successfully-done'],
    label: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-onboarded.jpg`,
      medium: `${assetsPath}/img-medium-onboarded.jpg`,
      small: '',
    },
    showStepper: false,
  },
  {
    name: ['successfully-done-co-applicant'],
    label: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-onboarded.jpg`,
      medium: `${assetsPath}/img-medium-onboarded.jpg`,
      small: '',
    },
    showStepper: false,
  },
  {
    name: ['in-review-done'],
    label: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-inreview.jpg`,
      medium: `${assetsPath}/img-medium-inreview.jpg`,
      small: '',
    },
    showStepper: false,
  },
  {
    name: ['retry'],
    label: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-retry.jpg`,
      medium: `${assetsPath}/img-medium-retry.jpg`,
      small: '',
    },
    showStepper: false,
  },
  {
    name: ['declined'],
    label: '',
    backgroundImages: {
      large: `${assetsPath}/img-large-declined.jpg`,
      medium: `${assetsPath}/img-medium-declined.jpg`,
      small: '',
    },
    showStepper: false,
  },
];

if (environment['co-applicant']) {
  initialStep = 'welcome';
  interactionName = 'co-applicant-welcome';
  LABELS = [
    {
      name: ['welcome'],
      label: '',
      backgroundImages: {
        large: `${assetsPath}/img-large-step2.jpg`,
        medium: `${assetsPath}/img-medium-step2.jpg`,
        small: '',
      },
      showStepper: false,
    },
  ];
}

const steps = {
  [interactionName]: LABELS,
};

export const dsLayoutContainerConfig = { interactionName, steps, initialStep };

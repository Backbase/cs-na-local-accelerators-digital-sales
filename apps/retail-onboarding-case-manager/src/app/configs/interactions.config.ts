import { InteractionsWithSteps } from '@backbase/case-manager-ang/shared';

export const idtSteps: InteractionsWithSteps = {
  'address-validation-idt': [
    {
      label: 'Your address',
      name: ['address'],
      headline: 'Where do you live?',
      backgroundImages: {
        large: `assets/background/img-large-step2.jpg`,
        medium: `assets/background/img-medium-step2.jpg`,
        small: '',
      },
      showStepper: true,
    },
  ],
  'idv-idt': [
    {
      label: 'ID protection',
      name: ['identity-verification'],
      headline: 'Smile for the camera',
      backgroundImages: {
        large: `assets/background/img-large-IDV.jpg`,
        medium: `assets/background/img-medium-IDV.jpg`,
        small: '',
      },
      showStepper: true,
    },
  ],
  'kyc-idt': [
    {
      label: 'Additional information',
      name: ['kyc'],
      headline: 'Tell us a little more about yourself',
      backgroundImages: {
        large: `assets/background/img-large-additionalinfo.jpg`,
        medium: `assets/background/img-medium-additionalinfo.jpg`,
        small: '',
      },
      showStepper: true,
    },
  ],
  'citizenship-idt': [
    {
      label: 'Citizenship',
      name: ['citizenship'],
      headline: "Let's verify your citizenship",
      backgroundImages: {
        large: `assets/background/img-large-step3.jpg`,
        medium: `assets/background/img-medium-step3.jpg`,
        small: '',
      },
      showStepper: true,
      children: [
        {
          label: 'Citizenship details',
          name: ['ssn', 'non-resident-data'],
          headline: 'Let’s verify your citizenship',
          backgroundImages: {
            large: `assets/background/img-large-step3.jpg`,
            medium: `assets/background/img-medium-step3.jpg`,
            small: '',
          },
          showStepper: true,
        },
      ],
    },
  ],
};

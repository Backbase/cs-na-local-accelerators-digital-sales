import { MenuItem } from '@backbase/ds-shared-ang/ui-containers';

export const layoutConfig: { menuItems: MenuItem[] } = {
  menuItems: [
    {
      path: 'dashboard',
      label: 'Dashboard',
      icon: 'description',
    },
    {
      path: 'retail-onboarding',
      label: 'Retail Onboarding',
      icon: 'insert-drive-file',
    },
    {
      path: 'insights-dashboard',
      label: 'Insights Dashboard',
      icon: 'description',
    },
    {
      path: 'process-definitions',
      label: 'Process Definitions',
      icon: 'insert-drive-file',
    },
    {
      path: 'decision-definitions',
      label: 'Decision Definitions',
      icon: 'description',
    },
  ],
};

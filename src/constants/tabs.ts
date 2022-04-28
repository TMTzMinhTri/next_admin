import * as React from 'react';
import { HomeContainer, UserDetailContainer, UserManagementContainer } from '@/components';
import { TabTypeComponent } from '@/store/tab/types';

export const tabComponents: Record<TabTypeComponent, React.FC> = {
  home: HomeContainer,
  userDetail: UserDetailContainer,
  userManager: UserManagementContainer,
};

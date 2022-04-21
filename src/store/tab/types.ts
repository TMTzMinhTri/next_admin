export interface ITabReducer {
  tabs: Record<string, ITab>;
  currentTab: string;
}

export type TabTypeComponent = 'home' | 'userManager' | 'userDetail';

export type TabTypeIcon = 'home' | 'user';
export interface ITab {
  tabId: string;
  title: string;
  icon: TabTypeIcon;
  tabType: TabTypeComponent;
}

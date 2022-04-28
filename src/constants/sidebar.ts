import urls from './urls';

interface ISidebarMenu {
  label: string;
  path: string;
}

export const sidebarMenus: Record<string, ISidebarMenu> = {
  excel: {
    label: 'Excel',
    path: urls.excel(),
  },
};

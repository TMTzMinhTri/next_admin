import { PaletteMode } from '@mui/material';

export declare global {
  type ContentWidth = 'full' | 'boxed';

  type ThemeColor =
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success';

  type NavLink = {
    path?: string;
    title: string;
    action?: string;
    subject?: string;
    disabled?: boolean;
    badgeContent?: string;
    externalLink?: boolean;
    openInNewTab?: boolean;
    icon?: string | string[] | ReactNode;
    badgeColor?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'warning'
      | 'info';
  };

  interface NavSectionTitle {
    sectionTitle: string;
    action?: string;
    subject?: string;
  }

  type VerticalNavItemsType = Array<NavLink | NavSectionTitle>;

  type Settings = {
    mode: PaletteMode;
    themeColor: ThemeColor;
    contentWidth: ContentWidth;
  };
}

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string;
      tableHeaderBg: string;
      primaryGradient: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      main?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
    };
  }
}

export {};

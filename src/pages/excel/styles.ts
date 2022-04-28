import { layoutVariables } from '@/constants/variables';
import { SxProps, Theme } from '@mui/system';

enum excelPageStyle {
  container = 'container',
}

const styles: Record<excelPageStyle, SxProps<Theme>> = {
  container: {
    height: (theme) =>
      `calc(100vh - ${layoutVariables.headerHeight}px - ${theme.spacing(7)})`,
    overflow: 'hidden',
  },
};

export default styles;

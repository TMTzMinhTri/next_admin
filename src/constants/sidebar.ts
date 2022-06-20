import { HomeMaxOutlined } from '@mui/icons-material'

export const sidebarDashBoardMenus: VerticalNavItemsType = [
  {
    title: 'Dashboard',
    icon: HomeMaxOutlined,
    path: '/'
  },
  {
    title: 'Account Settings',
    icon: HomeMaxOutlined,
    path: '/account-settings'
  },
  {
    sectionTitle: 'Pages'
  },
  {
    title: 'Login',
    icon: HomeMaxOutlined,
    path: '/pages/login',
    openInNewTab: true
  },
  {
    title: 'Register',
    icon: HomeMaxOutlined,
    path: '/pages/register',
    openInNewTab: true
  },
  {
    title: 'Error',
    icon: HomeMaxOutlined,
    path: '/pages/error',
    openInNewTab: true
  },
  {
    sectionTitle: 'User Interface'
  },
  {
    title: 'Typography',
    icon: HomeMaxOutlined,
    path: '/typography'
  },
  {
    title: 'Icons',
    path: '/icons',
    icon: HomeMaxOutlined
  },
  {
    title: 'Cards',
    icon: HomeMaxOutlined,
    path: '/cards'
  },
  {
    title: 'Tables',
    icon: HomeMaxOutlined,
    path: '/tables'
  },
  {
    icon: HomeMaxOutlined,
    title: 'Form Layouts',
    path: '/form-layouts'
  }
]

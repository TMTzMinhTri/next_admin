import { Dashboard } from '@mui/icons-material'
import routes from './routes'

export const sidebarDashBoardMenus: VerticalNavItemsType = [
  {
    title: 'Dashboard',
    icon: Dashboard,
    path: routes.admin.root(),
  },
  {
    title: 'Server',
    icon: Dashboard,
    path: routes.admin.server(),
  },
]

// {
//   sectionTitle: 'Pages'
// },
// {
//   title: 'Login',
//   icon: HomeMaxOutlined,
//   path: '/pages/login',
//   openInNewTab: true
// },
// {
//   title: 'Register',
//   icon: HomeMaxOutlined,
//   path: '/pages/register',
//   openInNewTab: true
// },
// {
//   title: 'Error',
//   icon: HomeMaxOutlined,
//   path: '/pages/error',
//   openInNewTab: true
// },
// {
//   sectionTitle: 'User Interface'
// },
// {
//   title: 'Typography',
//   icon: HomeMaxOutlined,
//   path: '/typography'
// },
// {
//   title: 'Icons',
//   path: '/icons',
//   icon: HomeMaxOutlined
// },
// {
//   title: 'Cards',
//   icon: HomeMaxOutlined,
//   path: '/cards'
// },
// {
//   title: 'Tables',
//   icon: HomeMaxOutlined,
//   path: '/tables'
// },
// {
//   icon: HomeMaxOutlined,
//   title: 'Form Layouts',
//   path: '/form-layouts'
// }

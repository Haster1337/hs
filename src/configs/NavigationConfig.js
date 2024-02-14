import { 
  DashboardOutlined, 
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  HighlightFilled
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.main',
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'main-dashbord',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'sidenav.main-dashbord',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'sidenav.main-catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-catalog-inventory',
            path: `${APP_PREFIX_PATH}/inventory`,
            title: 'sidenav.main-catalog-inventory',
            icon: "",
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-catalog-category',
            path: `${APP_PREFIX_PATH}/category`,
            title: 'sidenav.main-catalog-category',
            icon: "",
            breadcrumb: true,
            submenu: []
          },
          { 
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/collections`,
            title: 'sidenav.main-catalog-collections',
            icon: "",
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/combo`,
            title: 'sidenav.main-catalog-combo',
            icon: "",
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'sidenav.main-orders',
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'main-customers',
        path: `${APP_PREFIX_PATH}/customers`,
        title: 'sidenav.main-customers',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-customers-list',
            path: `${APP_PREFIX_PATH}/customers-list`,
            title: 'sidenav.main-customers-list',
            icon: "",
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-customers-groups',
            path: `${APP_PREFIX_PATH}/customers-groups`,
            title: 'sidenav.main-customers-groups',
            icon: "",
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'sidenav.main-banners',
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'main-promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.main-promocodes',
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'main-shops',
        path: `${APP_PREFIX_PATH}/shops`,
        title: 'sidenav.main-shops',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-shops-address',
            path: `${APP_PREFIX_PATH}/address`,
            title: 'sidenav.main-shops-address',
            icon: "",
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'main-shops-geofences',
            path: `${APP_PREFIX_PATH}/geofences`,
            title: 'sidenav.main-shops-geofences',
            icon: "",
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'main-workers',
        path: `${APP_PREFIX_PATH}/workers`,
        title: 'sidenav.main-workers',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'main-mailing',
        path: `${APP_PREFIX_PATH}/mailing`,
        title: 'sidenav.main-mailing',
        icon: MailOutlined,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: "",
    breadcrumb: true,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.system-settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'system-apps',
        path: `${APP_PREFIX_PATH}/apps`,
        title: 'sidenav.system-apps',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'sidenav.system-logs',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const plannerNavTree = [
  {
    key: 'planner',
    path: `${APP_PREFIX_PATH}/planner`,
    title: 'sidenav.planner',
    icon: "",
    breadcrumb: true,
    submenu: [
      {
        key: 'planner.submenu',
        path: `${APP_PREFIX_PATH}/planner`,
        title: 'sidenav.planner',
        icon: HighlightFilled,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...plannerNavTree,
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;

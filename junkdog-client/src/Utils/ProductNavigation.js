import BrandIcon from '@material-ui/icons/Loyalty';
import CategoryIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ProductIcon from '@material-ui/icons/ShoppingCart';
import SizeIcon from '@material-ui/icons/Straighten';
import SupplierIcon from '@material-ui/icons/Place';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import FAQIcon from '@material-ui/icons/Info';
import FlynetIcon from '@material-ui/icons/MonetizationOn';

export const navigationOptions = [
  {
    name: 'Brands',
    icon: BrandIcon,
    url: '/brand',
  },
  {
    name: 'Categories',
    icon: CategoryIcon,
    url: '/category',
  },
  {
    name: 'Dashboard',
    icon: DashboardIcon,
    url: '/dashboard',
  },
  {
    name: 'Products',
    icon: ProductIcon,
    url: '/product',
  },
  {
    name: 'Sizes',
    icon: SizeIcon,
    url: '/size',
  },
  {
    name: 'Suppliers',
    icon: SupplierIcon,
    url: '/supplier',
  },
];

export const defaultOptions = [
  {
    name: 'Sign out',
    icon: LogoutIcon,
    url: null,
  },
  {
    name: 'FAQ',
    icon: FAQIcon,
    url: '/faq',
  },
  {
    name: 'Flynet',
    icon: FlynetIcon,
    url: 'printfly.com',
  },
];

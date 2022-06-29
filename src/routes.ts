import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/Layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const ComponentA = lazy(() => import('@/pages/ComponentA'));
const ComponentB = lazy(() => import('@/pages/ComponentB'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    pageConfig: {
      title: 'Home',
    },
  },
  {
    path: '/component',
    component: BasicLayout,
    pageConfig: {
      title: '组件',
    },
    children: [
      {
        path: '/a',
        component: ComponentA,
        pageConfig: {
          title: '组件A',
        },
      },
      {
        path: '/b',
        component: ComponentB,
        pageConfig: {
          title: '组件B',
        },
      },
    ],
  },
];

export default routerConfig;

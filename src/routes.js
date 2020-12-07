import { lazy } from 'react';

export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    showInMenu: 'Главная',
    component: lazy(() =>
      import('./pages/Home' /* webpackChunkName: "home-page" */),
    ),
    private: false,
    restricted: false,
  },
  {
    name: 'Account',
    path: '/account',
    exact: true,
    showInMenu: 'Мой аккаунт',
    component: lazy(() =>
      import('./pages/Account' /* webpackChunkName: "account-page" */),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'Tobacco',
    path: '/tobacco',
    exact: true,
    showInMenu: 'Табаки',
    component: lazy(() =>
      import('./pages/Tobacco' /* webpackChunkName: "tobacco-page" */),
    ),
    private: false,
    restricted: false,
  },
  {
    name: 'Accessories',
    path: '/accessories',
    showInMenu: 'Аксессуары',
    exact: true,
    component: lazy(() =>
      import('./pages/Accessories' /* webpackChunkName: "accessories-page" */),
    ),
    private: false,
    restricted: false,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    showInMenu: 'Контакты',
    exact: true,
    component: lazy(() =>
      import('./pages/Contacts' /* webpackChunkName: "contacts-page" */),
    ),
    private: false,
    restricted: false,
  },
  {
    name: 'Cart',
    path: '/cart',
    showInMenu: 'Корзина',
    exact: true,
    component: lazy(() =>
      import('./pages/Cart' /* webpackChunkName: "cart-page" */),
    ),
    private: false,
    restricted: false,
  },
  {
    name: 'Order',
    path: '/order',
    showInMenu: false,
    exact: true,
    component: lazy(() =>
      import('./pages/Order' /* webpackChunkName: "order-page" */),
    ),
    private: false,
    restricted: true,
  },
];

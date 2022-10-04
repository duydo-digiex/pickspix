import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Resource from '@/components/Resource.vue';
// import store from '@/store/index';

export {};

import 'vue-router';
// import { PageExitGuard } from './guard';
// import { TEST_STEP } from '@/uses/enum/common.enum';
// import { UrlResponse } from '@/repositorys/student.repository';
// import { getImgUrl } from '@/utils/helper';

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    title?: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/cms/Home.vue'),
    meta: {
      layout: 'default',
      title: 'CMS | Home Page'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/auth/Login.vue'),
    meta: {
      layout: 'auth',
      title: 'Auth | Login Page'
    }
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../pages/cms/Design.vue'),
    meta: {
      layout: 'default',
      title: 'CMS | Design Page'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404-route',
    meta: {
      layout: 'blank',
      title: 'Error | 404 Not Found'
    },
    component: () => import('../pages/error/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach(to => {});

router.beforeEach((to, from) => {
  document.title = to.meta.title || '';
});

export default router;

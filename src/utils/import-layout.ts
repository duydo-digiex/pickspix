import { App, defineAsyncComponent } from 'vue';

export function registerGlobalComponents(app: App<Element>): void {
  app.component(
    'default-layout',
    defineAsyncComponent(() => import('@/layouts/default.vue'))
  );

  app.component(
    'blank-layout',
    defineAsyncComponent(() => import('@/layouts/blank.vue'))
  );

  app.component(
    'auth-layout',
    defineAsyncComponent(() => import('@/layouts/auth.vue'))
  );
}

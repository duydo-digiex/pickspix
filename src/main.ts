import { createApp } from 'vue';
import './assets/styles/style.scss';

// style antd
import './assets/styles/ant-design/theme.less';
import { registerAntDesignComponents } from './utils/register-antd-components';

import App from './App.vue';
import { registerGlobalComponents } from './utils/import-layout';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

registerAntDesignComponents(app);
registerGlobalComponents(app);

app.use(pinia).use(router).mount('#app');

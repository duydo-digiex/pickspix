import { App } from 'vue';
// import Antd from 'ant-design-vue/lib'

import {
  Button,
  DatePicker,
  ConfigProvider
  // Select,
  // Layout,
  // Menu,
  // Avatar,
  // Popover,
  // Form,
  // Input,
  // Radio,
  // AutoComplete,
  // Checkbox,
  // Collapse,
  // Modal
} from 'ant-design-vue';

export function registerAntDesignComponents(app: App<Element>): void {
  app.use(ConfigProvider);
  app.use(Button);
  app.use(DatePicker);
  // app.use(Select);
  // app.use(Layout);
  // app.use(Menu);
  // app.use(Avatar);
  // app.use(Popover);
  // app.use(Form);
  // app.use(Input);
  // app.use(Radio);
  // app.use(AutoComplete);
  // app.use(Checkbox);
  // app.use(Collapse);
  // app.use(Modal);
}

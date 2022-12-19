import type { App } from "vue";

import { Button, Layout, Input } from "ant-design-vue";

export function registerGlobComp(app: App) {
  app.use(Button).use(Input).use(Layout);
}

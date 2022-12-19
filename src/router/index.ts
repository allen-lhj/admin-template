import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    { path: "/", component: () => import("../components/HelloWorld.vue") },
  ] as unknown as RouteRecordRaw[],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
export function setupRouter(app: App) {
  app.use(router);
}

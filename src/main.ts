import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerGlobComp } from "./components/registerGlobComp";
import { setupRouter } from "./router/index";
async function bootstrap() {
  const app = createApp(App);
  // 注册全局组件
  registerGlobComp(app);
  // 配置路由
  setupRouter(app);
  app.mount("#app");
}

bootstrap();

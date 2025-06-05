// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./style/index.css"; //引入自定义的样式
import "./style/pricing.css"; //引入自定义的样式

import { inBrowser } from "vitepress";
//import busuanzi from "busuanzi.pure.js";
//import DataPanel from "./components/DataPanel.vue";
import Confetti  from "./components/Confetti.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    //app.component("DataPanel", DataPanel);//注册全局组件
    app.component("Confetti",Confetti);
    //if (inBrowser) {
     // router.onAfterRouteChanged = () => {
     //   busuanzi.fetch();
     // };
   // }
  },
};

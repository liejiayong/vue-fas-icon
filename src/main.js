import Vue from "vue";
import App from "./App.vue";
import jfasIcon, { JYfasIcon } from "./components/export.js";

// // Method one: use component
// Vue.component("jfas-icon", JYfasIcon);

// Method two: use Vue.use
Vue.use(jfasIcon);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

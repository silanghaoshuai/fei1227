import Vue from "vue";
import App from "@/App";
import router from "./router";
import store from "./store";
import TypeNav from "@/components/TypeNav";
import "./mock/mockServer";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

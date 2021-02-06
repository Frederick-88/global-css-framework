import Vue from "vue";
import GlobalVue from "./index";

import router from "./router";
import App from "./App.vue";

Vue.use(GlobalVue); // use all components defined in GlobalVue for all vue components.

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");

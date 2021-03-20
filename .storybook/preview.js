import Vue from "vue";

// Import your global components.
import * as BaseUI from "@/components";
import vClickOutside from "v-click-outside";

// Register global components to be used in some stories without need to define again.
Object.values(BaseUI).forEach((Component) => {
  Vue.component(Component.name, Component);
});
Vue.use(vClickOutside);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

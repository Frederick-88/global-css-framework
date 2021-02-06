import * as GlobalUI from "./components";

// create vue.component - prepare to be used globally
// similar like after we import components, then in <script> we have "components: {component1, component2}"
const GlobalVue = {
  install(Vue) {
    Object.values(GlobalUI).forEach((Component) => {
      Vue.component(Component.name, Component);
    });
  },
};

export default GlobalVue;
export * from "./components";

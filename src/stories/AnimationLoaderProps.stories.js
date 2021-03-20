import GlobalAnimationLoader from "../components/GlobalAnimationLoader/GlobalAnimationLoader.vue";
import rocketLoader from "@/assets/files/rocket-loader.json";

export default {
  title: "GlobalUI/* GlobalAnimationLoaderProps",
  component: GlobalAnimationLoader,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalAnimationLoader },
  template: `<div>
  <GlobalAnimationLoader v-bind="$props" :file="jsonFile" />
  <h4 style="textAlign: center">This is the props section, no need to follow the code snippet here.</h4> 
  </div>`,
  data() {
    return {
      jsonFile: rocketLoader,
    };
  },
});

export const Default = Template.bind({});

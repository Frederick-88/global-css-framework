import GlobalBaseDialog from "../components/GlobalBaseDialog/GlobalBaseDialog.vue";

export default {
  title: "GlobalUI/* GlobalBaseDialogProps",
  component: GlobalBaseDialog,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalBaseDialog },
  template: `<div>
      <h4>This is the props section, you don't need to follow the code snippet here.</h4> 
      <GlobalBaseDialog v-bind="$props" :is-show="false" />
    </div>`,
});

export const Props = Template.bind({});

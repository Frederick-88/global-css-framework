import GlobalSwitch from "../components/GlobalSwitch/GlobalSwitch.vue";

export default {
  title: "GlobalUI/GlobalSwitch",
  component: GlobalSwitch,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalSwitch },
  template: '<GlobalSwitch v-bind="$props" />',
});

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "GlobalSwitch Label",
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  isDisabled: true,
};

export const IsChecked = Template.bind({});
IsChecked.args = {
  isChecked: true,
};

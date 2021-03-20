import GlobalButton from "../components/GlobalButton/GlobalButton.vue";

export default {
  title: "GlobalUI/GlobalButton",
  component: GlobalButton,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalButton },
  template: '<GlobalButton v-bind="$props">Global Button Text</GlobalButton>',
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: "By Default Background of GlobalButton will be 'Light'.",
    },
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isDisabled: true,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  href: "https://offeo.com",
  newTab: true,
};

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
};

export const Success = Template.bind({});
Success.args = {
  isSuccess: true,
};

export const Warning = Template.bind({});
Warning.args = {
  isWarning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  isDanger: true,
};

export const Light = Template.bind({});
Light.args = {
  isLight: true,
};

export const Dark = Template.bind({});
Dark.args = {
  isDark: true,
};

export const PrimaryHollow = Template.bind({});
PrimaryHollow.args = {
  isPrimaryHollow: true,
};

export const SuccessHollow = Template.bind({});
SuccessHollow.args = {
  isSuccessHollow: true,
};

export const WarningHollow = Template.bind({});
WarningHollow.args = {
  isWarningHollow: true,
};

export const DangerHollow = Template.bind({});
DangerHollow.args = {
  isDangerHollow: true,
};

export const LightHollow = Template.bind({});
LightHollow.args = {
  isLightHollow: true,
};

export const DarkHollow = Template.bind({});
DarkHollow.args = {
  isDarkHollow: true,
};

export const TallButton = Template.bind({});
TallButton.args = {
  isTall: true,
};

export const ShortButton = Template.bind({});
ShortButton.args = {
  isShort: true,
};

import GlobalInput from "../components/GlobalInput/GlobalInput.vue";

export default {
  title: "GlobalUI/GlobalInput",
  component: GlobalInput,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalInput },
  template: '<GlobalInput v-bind="$props" />',
});

const TemplateWithMoreHeight = (args) => ({
  props: Object.keys(args),
  components: { GlobalInput },
  template:
    '<div style="minHeight: 10vh"><GlobalInput v-bind="$props" /></div>',
});

export const Default = Template.bind({});

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: "Disabled Input",
  isDisabled: true,
};

export const ReadonlyInput = Template.bind({});
ReadonlyInput.args = {
  placeholder: "Readonly Input",
  isReadOnly: true,
};

export const InputWithInitialValue = Template.bind({});
InputWithInitialValue.args = {
  value: "Input with value in first place",
};

export const InputWithPasswordType = Template.bind({});
InputWithPasswordType.args = {
  type: "password",
  value: "password",
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: "Your phone number?",
  placeholder: "085835538888",
};

export const SuccessInput = TemplateWithMoreHeight.bind({});
SuccessInput.args = {
  isSuccess: true,
  message: "Your input success message",
};
SuccessInput.parameters = {
  docs: {
    description: {
      story:
        "When you set isWarning / isError / isSuccess props become 'true', you need to add 'message' props.",
    },
  },
};

export const WarningInput = TemplateWithMoreHeight.bind({});
WarningInput.args = {
  isWarning: true,
  message: "Your input warning message",
};

WarningInput.parameters = {
  docs: {
    description: {
      story:
        "When you set isWarning / isError / isSuccess props become 'true', you need to add 'message' props.",
    },
  },
};

export const ErrorInput = TemplateWithMoreHeight.bind({});
ErrorInput.args = {
  isError: true,
  message: "Your input error message",
};
ErrorInput.parameters = {
  docs: {
    description: {
      story:
        "When you set isWarning / isError / isSuccess props become 'true', you need to add 'message' props.",
    },
  },
};

export const TallInput = Template.bind({});
TallInput.args = {
  isTall: true,
  placeholder: "Tall Input",
};

export const ShortInput = Template.bind({});
ShortInput.args = {
  isShort: true,
  placeholder: "Short Input",
};

import GlobalDropdown from "../components/GlobalDropdown/GlobalDropdown.vue";

export default {
  title: "GlobalUI/GlobalDropdown",
  component: GlobalDropdown,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalDropdown },
  template:
    '<div style="minHeight: 40vh"><GlobalDropdown v-bind="$props" :options="dropdownItems" /></div>',
  data() {
    return {
      dropdownItems: [
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Blue", value: "blue" },
        { name: "Red2", value: "red2" },
        { name: "Green2", value: "green2" },
        { name: "Blue2", value: "blue2" },
      ],
    };
  },
});

export const Default = Template.bind({});

export const withMaxWidthAndHeight = Template.bind({});
withMaxWidthAndHeight.args = {
  placeholder: "Pick your favourite color here!",
  maxWidth: "300px",
  maxHeight: "60px",
};

export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
  placeholder: "Pick your favourite color here!",
};

export const withInitialValue = Template.bind({});
withInitialValue.args = {
  value: "blue",
};
withInitialValue.parameters = {
  docs: {
    description: {
      story:
        "Value sent will be value from the 'options' props that you want to show up first ( e.g 'blue', 'red', etc )",
    },
  },
};

export const AutoCompleteDropdown = Template.bind({});
AutoCompleteDropdown.args = {
  value: "blue",
  autoComplete: true,
  autoCompletePlaceholder: "Search Here",
  maxWidth: "600px",
};

AutoCompleteDropdown.parameters = {
  docs: {
    description: {
      story:
        "If you use 'AutoComplete' props, make sure to provide 'AutoCompletePlaceholder' props.",
    },
  },
};

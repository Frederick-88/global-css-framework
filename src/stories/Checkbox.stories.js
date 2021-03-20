import GlobalCheckbox from "../components/GlobalCheckbox/GlobalCheckbox.vue";
import GlobalCheckboxList from "../components/GlobalCheckbox/GlobalCheckboxList.vue";

export default {
  title: "GlobalUI/GlobalCheckbox",
  component: GlobalCheckbox,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalCheckbox },
  template: '<GlobalCheckbox v-bind="$props" />',
});

const TemplateLists = (args) => ({
  components: { GlobalCheckboxList },
  props: Object.keys(args),
  template: '<GlobalCheckboxList v-bind="$props" />',
});

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "remember me",
};

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  isChecked: true,
  label: "Primary",
};

export const Success = Template.bind({});
Success.args = {
  isSuccess: true,
  isChecked: true,
  label: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
  isWarning: true,
  isChecked: true,
  label: "Warning",
};

export const Danger = Template.bind({});
Danger.args = {
  isDanger: true,
  isChecked: true,
  label: "Danger",
};

export const AllColors = TemplateLists.bind({});
AllColors.args = {
  checkboxLists: [
    { isPrimary: true, label: "Primary", isChecked: true },
    { isSuccess: true, label: "Success", isChecked: true },
    { isWarning: true, label: "Warning", isChecked: true },
    { isDanger: true, label: "Danger", isChecked: true },
  ],
};

AllColors.parameters = {
  docs: {
    description: {
      story:
        "AllColors section here only show all color options this Checkbox has. Don't follow this code snippet.",
    },
  },
};

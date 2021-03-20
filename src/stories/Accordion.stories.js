import GlobalAccordion from "../components/GlobalAccordion/GlobalAccordion.vue";

export default {
  title: "GlobalUI/GlobalAccordion",
  component: GlobalAccordion,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalAccordion },
  template: '<GlobalAccordion v-bind="$props" :items="accordionItems" />',
  data() {
    return {
      accordionItems: [
        {
          title: "Accordion 1",
          text: "This is the value / content of Accordion 1",
        },
        {
          title: "Accordion 2",
          text: "This is the value / content of Accordion 2",
          isActive: true,
        },
      ],
    };
  },
});

const MultipleTemplate = (args) => ({
  props: Object.keys(args),
  components: { GlobalAccordion },
  template: '<GlobalAccordion v-bind="$props" :items="accordionItems" />',
  data() {
    return {
      accordionItems: [
        {
          title: "Accordion 1",
          text: "This is the value / content of Accordion 1",
          isActive: true,
        },
        {
          title: "Accordion 2",
          text: "This is the value / content of Accordion 2",
          isActive: true,
        },
        {
          title: "Accordion 3",
          text: "This is the value / content of Accordion 3",
          isActive: true,
        },
      ],
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  icon: "plus",
};

export const AllowMultiple = MultipleTemplate.bind({});
AllowMultiple.args = {
  icon: "caret",
  allowMultiple: true,
};

AllowMultiple.parameters = {
  docs: {
    description: {
      story: "AllowMultiple means to allow user to open multiple accordions.",
    },
  },
};

export const Light = Template.bind({});
Light.args = {
  icon: "plus",
  isLight: true,
};

export const Dark = Template.bind({});
Dark.args = {
  icon: "caret",
  isDark: true,
};

export const Primary = Template.bind({});
Primary.args = {
  icon: "plus",
  isPrimary: true,
};

export const Success = Template.bind({});
Success.args = {
  icon: "caret",
  isSuccess: true,
};

export const Warning = Template.bind({});
Warning.args = {
  icon: "plus",
  isWarning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  icon: "caret",
  isDanger: true,
};

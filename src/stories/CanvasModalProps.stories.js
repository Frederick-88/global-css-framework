import GlobalCanvasModal from "../components/GlobalCanvasModal/GlobalCanvasModal.vue";

export default {
  title: "GlobalUI/* GlobalCanvasModalProps",
  component: GlobalCanvasModal,
};

const Template = (args) => ({
  props: Object.keys(args),
  components: { GlobalCanvasModal },
  template: `<div>
      <h4>This is the props section, no need to follow the code snippet here.</h4> 
      <GlobalCanvasModal v-bind="$props" :is-show="false" />
    </div>`,
});

export const Props = Template.bind({});

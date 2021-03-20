<template>
  <div class="accordion" :class="[propClass]">
    <GlobalAccordionItem
      v-for="(item, index) in accordionItems"
      :key="item.title"
      :index="index"
      :icon="icon"
      :isActive="isActive(index)"
      :title="item.title"
      :text="item.text"
      @open="openAccordion(index)"
      @close="closeAccordion(index)"
    ></GlobalAccordionItem>
  </div>
</template>

<script>
import GlobalAccordionItem from "./GlobalAccordionItem";

export default {
  name: "GlobalAccordion",
  components: {
    GlobalAccordionItem,
  },
  data() {
    return {
      activeIndex: -1,
      accordionItems: [],
    };
  },
  props: {
    /**
     * The items need to have title and text. <br/>
     * eg. [{ title: 'Name', text: 'Text' }] <br/>
     * If you want the item to be automatically opened from beginning, set "isActive" to true <br/>
     * eg. [{ title: 'Name', text: 'Text', isActive: true }]
     */
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    /**
     * The options are: '', 'caret', 'plus'
     */
    icon: {
      type: String,
      default: "",
    },
    /**
     * Allow Accordion to be open more than 1
     */
    allowMultiple: {
      type: Boolean,
      default: false,
    },

    // Colors
    isPrimary: { type: Boolean, default: false },
    isLight: { type: Boolean, default: false },
    isDark: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isWarning: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
  },
  computed: {
    propClass() {
      const classList = [];

      if (this.isPrimary) {
        classList.push("accordion--primary");
      }
      if (this.isSuccess) {
        classList.push("accordion--success");
      }
      if (this.isWarning) {
        classList.push("accordion--warning");
      }
      if (this.isDanger) {
        classList.push("accordion--danger");
      }
      if (this.isLight) {
        classList.push("accordion--light");
      }
      if (this.isDark) {
        classList.push("accordion--dark");
      }

      return classList;
    },
  },
  methods: {
    openAccordion(index) {
      if (this.allowMultiple) {
        this.accordionItems[index].isActive = true;
      } else {
        this.activeIndex = index;
      }
    },
    closeAccordion(index) {
      if (this.allowMultiple) {
        this.accordionItems[index].isActive = false;
      } else {
        this.activeIndex = -1;
      }
    },
    isActive(index) {
      if (this.allowMultiple) {
        return this.accordionItems[index].isActive;
      }

      return this.activeIndex === index;
    },
  },
  beforeMount() {
    this.items.forEach((item) => {
      const copyItem = Object.assign({}, item);
      if (typeof copyItem.isActive === "undefined")
        this.$set(copyItem, "isActive", false); // add "isActive" attribute
      this.accordionItems.push(copyItem);
    });

    // if allow-multiple = false, this line will find an accordion that has "isActive = true"
    this.activeIndex = this.accordionItems.findIndex((item) => item.isActive);
  },
};
</script>

<style lang="scss">
.accordion {
  .accordion__title {
    background: $lightGrey1; // light as default
    color: $darkGrey1;
  }

  &.accordion--primary {
    .accordion__title {
      background: $primary1;
      color: $white;
    }
  }

  &.accordion--danger {
    .accordion__title {
      background: $danger1;
      color: $white;
    }
  }

  &.accordion--success {
    .accordion__title {
      background: $success1;
      color: $white;
    }
  }

  &.accordion--warning {
    .accordion__title {
      background: $warning3;
      color: $white;
    }
  }

  &.accordion--dark {
    .accordion__title {
      background: $darkGrey1;
      color: $white;
    }
  }
}
</style>
